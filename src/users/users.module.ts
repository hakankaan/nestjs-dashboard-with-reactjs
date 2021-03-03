import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { PostsController } from '../posts/posts.controller';
import { UsersService } from './users.service';
import { PostsService } from '../posts/posts.service';

@Module({
  controllers: [UsersController, PostsController],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService,
  }, PostsService]
})
export class UsersModule {}
