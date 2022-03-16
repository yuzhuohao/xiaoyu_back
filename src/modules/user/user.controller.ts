import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ValidationPipe } from '../../pipes/validation.pipe';
import { LoginDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get(':id')
  // getUser(@Param('id') id): string {
  //   return this.userService.getUserInfo(id);
  // }

  // @Get('getList')
  // getUserList(@Paging() query) {
  //   return query;
  // }

  // @Get('getList')
  // @UsePipes(new PagingPipe())
  // getList(@Query() query) {
  //   return query;
  // }
  @Post('login')
  @UsePipes(new ValidationPipe())
  login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  // @Post('register')
  // register(@Body )
}
