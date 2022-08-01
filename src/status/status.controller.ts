import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { StatusDto } from './dto/status.dto'
import { StatusService } from './status.service'

@ApiTags('Статусы')
@Controller('status')
export class StatusController {
  constructor(private statusService: StatusService) {}

  @ApiOperation({ summary: 'Coздание статуса' })
  @Post('/create')
  createOrder(@Body() dto: StatusDto) {
    return this.statusService.createStatus(dto)
  }
}
