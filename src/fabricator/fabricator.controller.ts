import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { FabricatorDto } from './dto/fabricator.dto'
import { FabricatorService } from './fabricator.service'

@ApiTags('Производитель')
@Controller('fabricator')
export class FabricatorController {
  constructor(private fabricatorService: FabricatorService) {}

  @ApiOperation({ summary: 'Добавить производителя' })
  @Post('add')
  createFabricator(@Body() dto: FabricatorDto) {
    return this.fabricatorService.addFabricator(dto)
  }

  @Get('get')
  getAllFabricator() {
    return this.fabricatorService.getAllFabricator()
  }

  @Get(':name')
  getFabricatorByName(@Param('name') name: string) {
    return this.fabricatorService.getFabricatorByName(name)
  }
}
