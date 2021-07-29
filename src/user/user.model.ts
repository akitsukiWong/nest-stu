import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  email: string;
}
