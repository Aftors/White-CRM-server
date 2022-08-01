import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { FabricatorDto } from './dto/fabricator.dto'
import { Fabricator } from './models/fabricator.model'

@Injectable()
export class FabricatorService {
  constructor(
    @InjectModel(Fabricator) private fabricatorRepository: typeof Fabricator
  ) {}

  async addFabricator(dto: FabricatorDto) {
    const fabricator = await this.getFabricatorByName(dto.fabricator)
    if (fabricator) {
      return fabricator
    }
    return await this.fabricatorRepository.create(dto)
  }

  async getFabricatorByName(fabricator: string) {
    return await this.fabricatorRepository.findOne({
      where: { fabricator },
      include: { all: true },
    })
  }
}
