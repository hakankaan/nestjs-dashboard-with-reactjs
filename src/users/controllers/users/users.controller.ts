import { Controller, Delete, Get, Inject, Post } from '@nestjs/common';
import { IUserService } from 'src/users/services/users/users';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly usersService: IUserService){}
    
    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post()
    createUser(){
        return this.usersService.createUser();
    }

    @Delete()
    deleteUser(){
        this.usersService.deleteUser();
    }
}
