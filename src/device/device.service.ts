import { Body, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { FabricatorService } from 'src/fabricator/fabricator.service'
import { DeviceDto } from './dto/device.dto'
import { Device } from './model/device.model'

@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device) private deviceRepository: typeof Device,
    private fabricatorService: FabricatorService
  ) {}

  async addDevices(@Body() dto: DeviceDto) {
    const fabricator = await this.fabricatorService.getFabricatorByName(
      dto.fabricator
    )
    const device = await this.deviceRepository.create(dto)
    await device.$set('fabricator', [fabricator.id])
    device.fabricator = [fabricator]
    return device
  }

  async getDevice(deviceModel: string) {
    const device = await this.deviceRepository.findOne({
      where: { deviceModel },
      include: { all: true },
    })
    return device
  }
}
