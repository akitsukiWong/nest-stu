import { Table, Column, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true })
  @ApiProperty({ example: '1', description: '主键id' })
  id: number;

  @Column
  @ApiProperty({ example: '小明', description: '名称', required: false })
  name?: string;

  @Column
  @ApiProperty({
    example: '1234567890',
    description: '手机号',
    required: false,
  })
  phone?: string;

  @Column
  @ApiProperty({ example: '123@xx.com', description: '邮箱', required: false })
  email?: string;
}
