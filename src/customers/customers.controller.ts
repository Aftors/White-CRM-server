import { Controller, Post } from '@nestjs/common'
import { CustomersService } from './customers.service'

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}
}
