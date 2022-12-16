import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile, Users } from 'src/entities';
import { UsersController } from './users.controller';
import { UsersDao } from './users.dao';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Profile])],
  providers: [UsersService, UsersDao],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
