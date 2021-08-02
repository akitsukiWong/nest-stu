import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.phone = createUserDto.phone;
    user.email = createUserDto.email;
    return await this.userModel.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
