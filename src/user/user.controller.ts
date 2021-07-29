import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateDto } from './dto/create.dto';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  create(@Body() body: CreateDto): Promise<User> {
    return this.UserService.create(body);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }
}
