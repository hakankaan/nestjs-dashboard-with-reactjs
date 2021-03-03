import { Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto'
@Injectable()
export class UsersService implements IUserService {

    private users: CreateUserDto[] = [];
    getUser(): CreateUserDto[] {
        return this.users;
    }

    createUser(user: CreateUserDto) {
        return this.users.push(user);
    }
    
    deleteUser(username: string) {
        return this.users.map(e => e.username !== username);
    }

    getUserByUsername(username: string): CreateUserDto | undefined{
        return this.users.find( e => e.username === username);
    }
}
