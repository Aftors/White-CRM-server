import { OrderModule } from './../order/order.module'
import { Module } from '@nestjs/common'
import { CustomersController } from './customers.controller'
import { CustomersService } from './customers.service'
import { Customers } from './models/customers.model'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [SequelizeModule.forFeature([Customers])],
  exports: [CustomersService],
})
export class CustomersModule {}
