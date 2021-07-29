import { User } from './user.model';

export const catsProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
];
