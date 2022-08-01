import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { FabricatorModule } from 'src/fabricator/fabricator.module'
import { Fabricator } from 'src/fabricator/models/fabricator.model'
import { DeviceController } from './device.controller'
import { DeviceService } from './device.service'
import { Device } from './model/device.model'

@Module({
  controllers: [DeviceController],
  providers: [DeviceService],
  imports: [SequelizeModule.forFeature([Device, Fabricator]), FabricatorModule],
  exports: [DeviceService],
})
export class DeviceModule {}
