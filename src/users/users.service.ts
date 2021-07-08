import { Injectable } from '@nestjs/common';
import { IUsers } from './users.interface';

@Injectable()
export class UsersService {
  private readonly users: IUsers[] = [];

  create(user: IUsers) {
    this.users.push(user);
  }

  findAll(): IUsers[] {
    return this.users;
  }
}
