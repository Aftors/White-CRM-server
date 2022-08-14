import { ApiProperty } from '@nestjs/swagger'

export class DeviceDto {
  @ApiProperty({ example: 'A1706', description: 'Названия устройство' })
  readonly deviceModel: string

  @ApiProperty({ example: 'Apple', description: 'Производитель' })
  readonly fabricator: string
}
