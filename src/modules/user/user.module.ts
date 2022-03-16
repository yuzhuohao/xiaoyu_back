import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from '../../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
