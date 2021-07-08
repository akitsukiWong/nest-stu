import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  Param,
  Query,
} from '@nestjs/common';
import { IUsers } from './users.interface';
import { CreateDto } from './dto/create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateDto) {
    this.usersService.create(body);
    return { result: true };
  }

  @Get()
  async findAll(): Promise<IUsers[]> {
    return this.usersService.findAll();
  }
}
