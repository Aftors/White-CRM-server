import { ApiProperty } from '@nestjs/swagger'

export class DeviceDto {
  @ApiProperty({
    example: '1386',
    description: 'Уникальный номер заказа',
    required: true,
  })
  readonly numOrder: number

  @ApiProperty({ example: 'A1706', description: 'Названия устройство' })
  readonly deviceModel: string

  @ApiProperty({ example: 'Apple', description: 'Производитель' })
  readonly fabricator: string
}
