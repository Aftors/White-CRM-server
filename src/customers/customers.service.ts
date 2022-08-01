import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Customers } from './models/customers.model'
import { InjectModel } from '@nestjs/sequelize'
import { CreateCustomerDto } from './dto/create-customer.dto'

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customers) private customersRepository: typeof Customers
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const candidate = await this.getCustomerByPhone(createCustomerDto.phoneNum)
    if (candidate) {
      return candidate
    }
    const customer = await this.customersRepository.create(createCustomerDto)
    return customer
  }

  async getCustomerByPhone(phoneNum: string) {
    const customer = await this.customersRepository.findOne({
      where: { phoneNum },
      include: { all: true },
    })
    return customer
  }
}
