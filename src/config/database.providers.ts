import { Sequelize } from 'sequelize-typescript';
import { Users } from '../users/users.entity';
import { config } from './config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize(config.database, );
      sequelize.addModels([Users]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
