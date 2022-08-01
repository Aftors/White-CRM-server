import { ApiProperty } from '@nestjs/swagger'
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { Fabricator } from 'src/fabricator/models/fabricator.model'

interface DeviceAttrs {
  deviceModel: string
}

@Table({ tableName: 'device' })
export class Device extends Model<Device, DeviceAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальый индификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'A1706', description: 'Модель устройства' })
  @Column({ type: DataType.STRING })
  deviceModel: string

  @ForeignKey(() => Fabricator)
  @Column({ type: DataType.INTEGER })
  fabricatorId: number

  @BelongsTo(() => Fabricator)
  fabricator: Fabricator[]
}
