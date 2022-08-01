import { UserRoles } from './roles/models/user-role.model'
import { User } from './users/user.model'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/models/roles.model'
import { AuthModule } from './auth/auth.module'
import { OrderModule } from './order/order.module'
import { Order } from './order/models/order.model'
import { StatusModule } from './status/status.module'
import { Status } from './status/models/status.model'
import { Customers } from './customers/models/customers.model'
import { CustomersModule } from './customers/customers.module'
import { Fabricator } from './fabricator/models/fabricator.model'
import { FabricatorModule } from './fabricator/fabricator.module'
import { DeviceModule } from './device/device.module'
import { Device } from './device/model/device.model'

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Order,
        Status,
        Customers,
        Fabricator,
        Device,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    OrderModule,
    StatusModule,
    CustomersModule,
    FabricatorModule,
    DeviceModule,
  ],
})
export class AppModule {}
