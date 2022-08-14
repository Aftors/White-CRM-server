import { DeviceService } from './../device/device.service'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CustomersService } from 'src/customers/customers.service'
import { StatusService } from 'src/status/status.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { Order } from './models/order.model'

@Injectable()
export class OrderService {
  DeviceService: any
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    private customersService: CustomersService,
    private statusService: StatusService,
    private deviceService: DeviceService
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const lastOrderNum: number = await this.orderRepository.max('numOrder')
    createOrderDto.numOrder = lastOrderNum + 1
    const order = await this.orderRepository.create(createOrderDto)
    const getStatus = await this.statusService.getStatusByValue('Новый')
    const customer = await this.customersService.getCustomerByPhone(
      createOrderDto.phoneNum
    )
    const device = await this.deviceService.getDevice(
      createOrderDto.deviceModel
    )
    await order.$set('customers', [customer.id])
    order.customers = [customer]
    await order.$set('status', [getStatus.id])
    order.status = [getStatus]
    await order.$set('deviceModel', [device.id])
    order.deviceModel = [device]
    return order
  }

  async getOrderByNumOrder(numOrder: number) {
    const order = await this.orderRepository.findOne({
      where: { numOrder },
      include: { all: true },
    })
    return order
  }
}
