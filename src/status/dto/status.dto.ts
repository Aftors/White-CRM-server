import { ApiProperty } from '@nestjs/swagger'

export class StatusDto {
  @ApiProperty({
    example: 'Согласование',
    description: 'Уникальное значение статуса',
  })
  readonly value: string

  @ApiProperty({
    example: 'Статус согласования',
    description: 'Описание статуса',
  })
  readonly description: string
}
