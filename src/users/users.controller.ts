import { RolesGuard } from '../roles/role.guard'
import { Roles } from './../auth/roles-auth.decorator'
import { UsersService } from './users.service'
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './user.model'
import { AddRoleDto } from '../roles/dto/add-role.dto'
import { BanUserDto } from './dto/ban-user.dto'

@ApiTags('Api пользователя')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.UsersService.getAllUser()
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/addrole')
  addRole(@Body() dto: AddRoleDto) {
    return this.UsersService.addRole(dto)
  }

  @ApiOperation({ summary: 'Забанить' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto) {
    return this.UsersService.ban(dto)
  }
}
