import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { StatusDto } from './dto/status.dto'
import { Status } from './models/status.model'

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository: typeof Status) {}

  async createStatus(dto: StatusDto) {
    return await this.statusRepository.create(dto)
  }

  async getStatusByValue(value: string) {
    return await this.statusRepository.findOne({ where: { value } })
  }
}
