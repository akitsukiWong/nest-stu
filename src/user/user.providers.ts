import { User } from './user.entity';

export const catsProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];
