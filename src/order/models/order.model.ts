import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { Status } from 'src/status/models/status.model'
import { Customers } from 'src/customers/models/customers.model'
import { ApiProperty } from '@nestjs/swagger'

interface OrderCreationAttrs {
  numOrder: number
  deviceSN: string
  prePayment: number
  prePrice: number
  descriptionDamage: string
  descriptionDevice: string
}

@Table({ tableName: 'orders' })
export class Order extends Model<Order, OrderCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: '1386', description: 'Уникальный номер заказа' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  numOrder: string

  @ApiProperty({
    example: 'c01f7sa8',
    description: 'Индивидуальный серийный номер',
  })
  @Column({ type: DataType.STRING, unique: true })
  deviceSN: string

  @ApiProperty({ example: '1400', description: 'предоплата' })
  @Column({ type: DataType.INTEGER })
  prePayment: number

  @ApiProperty({ example: '5400', description: 'Предварительная цена' })
  @Column({ type: DataType.INTEGER })
  prePrice: number

  @ApiProperty({ example: 'Не включается', description: 'Описание проблемы' })
  @Column({ type: DataType.STRING })
  descriptionDamage: string

  @ApiProperty({
    example: 'Потертости, нет зарядного',
    description: 'Описание устройства и комплекта',
  })
  @Column({ type: DataType.STRING })
  descriptionDevice: string

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  statusId: number

  @BelongsTo(() => Status)
  status: Status[]

  @ForeignKey(() => Customers)
  @Column({ type: DataType.INTEGER })
  customersId: number

  @BelongsTo(() => Customers)
  customers: Customers[]
}
