import {
  BelongsTo,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { Order } from 'src/order/models/order.model'

interface CustomersCreationAttrs {
  name: string
  lastName: string
  phoneNum: string
  legalEntity: boolean
}

@Table({ tableName: 'customers' })
export class Customers extends Model<Customers, CustomersCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @Column({ type: DataType.STRING, allowNull: false })
  name: string
  @Column({ type: DataType.STRING })
  lastName: string
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  phoneNum: string
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  legalEntity: boolean

  @HasMany(() => Order)
  orders: Order[]
}
