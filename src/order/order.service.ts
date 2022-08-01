import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CustomersService } from 'src/customers/customers.service'
import { StatusService } from 'src/status/status.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { Order } from './models/order.model'

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderRepository: typeof Order,
    private customersService: CustomersService,
    private statusService: StatusService
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    await this.customersService.createCustomer(createOrderDto)
    const order = await this.orderRepository.create(createOrderDto)
    const getStatus = await this.statusService.getStatusByValue('Новый')
    const customer = await this.customersService.getCustomerByPhone(
      createOrderDto.phoneNum
    )
    await order.$set('customers', [customer.id])
    order.customers = [customer]
    await order.$set('status', [getStatus.id])
    order.status = [getStatus]
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
