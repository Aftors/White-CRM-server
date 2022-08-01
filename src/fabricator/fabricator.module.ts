import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { FabricatorController } from './fabricator.controller'
import { FabricatorService } from './fabricator.service'
import { Fabricator } from './models/fabricator.model'

@Module({
  controllers: [FabricatorController],
  providers: [FabricatorService],
  imports: [SequelizeModule.forFeature([Fabricator])],
  exports: [FabricatorService],
})
export class FabricatorModule {}
