import { Injectable } from '@nestjs/common';
import { IUserService } from './users';

@Injectable()
export class UsersService implements IUserService {
    getUsers() {
        return [];
    }
    createUser() {
        return 'new user';
    }
    deleteUser() {}
}
