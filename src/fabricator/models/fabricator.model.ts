import { ApiProperty } from '@nestjs/swagger'
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Device } from 'src/device/model/device.model'
import { Order } from 'src/order/models/order.model'

interface FabricatorAttrs {
  fabricator: string
}

@Table({ tableName: 'fabricator' })
export class Fabricator extends Model<Fabricator, FabricatorAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'Macbook', description: 'Производитель устройства' })
  @Column({ type: DataType.STRING, allowNull: false })
  fabricator: string

  @HasMany(() => Device)
  devices: Device[]
}
