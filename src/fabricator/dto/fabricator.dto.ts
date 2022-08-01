import { ApiProperty } from '@nestjs/swagger'

export class FabricatorDto {
  @ApiProperty({ example: 'Apple', description: 'Производитель устройства' })
  fabricator: string
}
