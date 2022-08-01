import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
  @ApiProperty({
    example: '1386',
    description: 'Уникальный номер заказа',
    required: true,
  })
  readonly numOrder: number

  @ApiProperty({ example: 'true', description: 'Физ Юр лицо' })
  readonly legalEntity: boolean

  @ApiProperty({ example: 'Василий', description: 'Имя клиента' })
  readonly name: string

  @ApiProperty({ example: 'Слиш', description: 'Фамилия клиента' })
  readonly lastName: string

  @ApiProperty({ example: '89817558528', description: 'Телефон клиента' })
  readonly phoneNum: string

  @ApiProperty({
    example: 'c01f7sa8',
    description: 'Индивидуальный серийный номер',
    required: false,
  })
  readonly deviceSN?: string

  @ApiProperty({ example: '1400', description: 'предоплата', required: false })
  readonly prepayment?: number

  @ApiProperty({
    example: '5400',
    description: 'Предварительная цена',
    required: false,
  })
  readonly prePrice?: number

  @ApiProperty({
    example: 'Не включается',
    description: 'Описание проблемы',
    required: false,
  })
  readonly descriptionDamage?: string

  @ApiProperty({
    example: 'Потертости, нет зарядного',
    description: 'Описание устройства и комплекта',
    required: false,
  })
  readonly descriptionDevice?: string
}
