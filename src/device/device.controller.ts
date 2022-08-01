import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DeviceService } from './device.service'
import { DeviceDto } from './dto/device.dto'

@ApiTags('Устройство')
@Controller('device')
export class DeviceController {
  constructor(private DeviceService: DeviceService) {}

  @ApiOperation({ summary: 'Добавить устройство' })
  @Post('add')
  createFabricator(@Body() dto: DeviceDto) {
    return this.DeviceService.addDevices(dto)
  }

  @Get(':model')
  getDevice(@Param('model') model: string) {
    return this.DeviceService.getDevice(model)
  }
}
