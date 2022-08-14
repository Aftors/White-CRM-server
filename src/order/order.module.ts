import { CustomersModule } from './../customers/customers.module'
import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { OrderController } from './order.controller'
import { Order } from './models/order.model'
import { OrderService } from './order.service'
import { Status } from 'src/status/models/status.model'
import { Customers } from 'src/customers/models/customers.model'
import { StatusModule } from 'src/status/status.module'
import { Device } from 'src/device/model/device.model'
import { DeviceModule } from 'src/device/device.module'

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [
    SequelizeModule.forFeature([Order, Status, Customers, Device]),
    CustomersModule,
    StatusModule,
    DeviceModule,
  ],
  exports: [OrderService],
})
export class OrderModule {}
