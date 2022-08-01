import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CreateOrderDto } from './dto/create-order.dto'
import { OrderService } from './order.service'

@ApiTags('Заказ')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiOperation({ summary: 'Coздание заказа' })
  @Post('/create')
  createOrder(@Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(dto)
  }
  @ApiOperation({ summary: 'Получение заказа по номеру' })
  @Get(':value')
  getByValue(@Param('value') numOrder: number) {
    return this.orderService.getOrderByNumOrder(numOrder)
  }
}
