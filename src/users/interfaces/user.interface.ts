import { CreateUserDto } from "../dto/create-user.dto";

export interface IUserService {
    getUser();
    createUser(user: CreateUserDto);
    deleteUser(username: string);
    getUserByUsername(username: string): CreateUserDto | undefined;
}