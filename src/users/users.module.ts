import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { UsersService } from './services/users/users.service';
import { PostsService } from './services/posts/posts.service';

@Module({
  controllers: [UsersController, PostsController],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService,
  }, PostsService]
})
export class UsersModule {}
