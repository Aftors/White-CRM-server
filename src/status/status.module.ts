import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Status } from './models/status.model'
import { StatusController } from './status.controller'
import { StatusService } from './status.service'

@Module({
  controllers: [StatusController],
  providers: [StatusService],
  imports: [SequelizeModule.forFeature([Status])],
  exports: [StatusService],
})
export class StatusModule {}
