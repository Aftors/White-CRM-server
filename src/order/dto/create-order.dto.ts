import { ApiProperty } from '@nestjs/swagger'

export class CreateOrderDto {
  @ApiProperty({ example: '1386', description: 'Уникальный номер заказа' })
  numOrder: number

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
  readonly prePayment?: string

  @ApiProperty({
    example: '5400',
    description: 'Предварительная цена',
    required: false,
  })
  readonly prePrice?: string

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

  @ApiProperty({
    example: 'A1466',
    description: 'название модели',
    required: false,
  })
  readonly deviceModel: string
}
