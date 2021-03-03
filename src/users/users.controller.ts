import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common';
import { IUserService } from 'src/users/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto'
@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly usersService: IUserService){}
    
    @Get()
    getUsers(){
        return this.usersService.getUser();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user);
    }

    @Delete()
    deleteUser(){
        this.usersService.deleteUser("string");
    }

    @Get(':username')
    @HttpCode(HttpStatus.OK)
    getUserByUsername(@Param('username') username: string){
        const user = this.usersService.getUserByUsername(username);
        return user ? user : {};
    }
}
