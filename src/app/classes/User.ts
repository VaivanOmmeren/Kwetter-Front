import {UserRole} from './UserRole';

export class User {
  id: string;
  name: string;
  bio: string;
  website: string;
  password: string;
  date: Date;
  token: string;
  userRole: UserRole;
}
