import { ApiProperty } from '@nestjs/swagger'

export class CreateCustomerDto {
  @ApiProperty({ example: 'Василий', description: 'Имя' })
  readonly name: string
  @ApiProperty({ example: 'Слиш', description: 'Фамилия' })
  readonly lastName: string
  @ApiProperty({ example: 'password123', description: 'Номер телефона' })
  readonly phoneNum: string
  @ApiProperty({
    example: 'true',
    description: 'Если true то Юр.лицо иначе Физ.лицо',
  })
  readonly legalEntity: boolean
}
