import { Users } from './users.entity';

export const catsProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: Users,
  },
];
