import { Controller, Post, Get, Body } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags, ApiHeader } from '@nestjs/swagger';
import { CreateDto } from './dto/create.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  @ApiBody({ type: CreateDto })
  @ApiHeader({
    name: 'xxx',
    description: '新增用户',
  })
  create(@Body() body: CreateDto): Promise<User> {
    return this.UserService.create(body);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: '获取所有user',
    type: User,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiHeader({
    name: 'xxx',
    description: '获取所有用户',
  })
  findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }
}
