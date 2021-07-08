import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Users extends Model<any, any> {
  @Column
  name: string;

  @Column
  age: number;
}
