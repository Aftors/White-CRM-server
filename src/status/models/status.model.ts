import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript'
import { Order } from 'src/order/models/order.model'

interface StatusCreationAttrs {
  value: string
  description: string
}

@Table({ tableName: 'status' })
export class Status extends Model<Status, StatusCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({
    example: 'Согласование',
    description: 'Уникальное значение статуса',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string

  @ApiProperty({
    example: 'Статус согласования',
    description: 'Описание статуса',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string

  @HasMany(() => Order)
  status: Order[]
}
