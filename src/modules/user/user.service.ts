import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import * as qs from 'qs';
import { lastValueFrom, map } from 'rxjs';
import { create } from 'domain';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private readonly httpService: HttpService,
  ) {}
  getUserInfo(id: string) {
    return '用户信息' + id;
  }
  // getUserList() {
  //   return '用户列表';
  // }
  async login(loginDto) {
    const { code } = loginDto;
    const weInfo = await this.getWechatInfo(code);
    // console.log(result);
    let userInfo = await this.userRepository.findOne({
      select: ['id', 'openid'],
      where: { openid: weInfo.openid },
    });
    if (userInfo == undefined) {
      userInfo = await this.userRepository.save({
        openid: weInfo.openid,
      });
    }
    console.log(userInfo);
    return userInfo;
  }
  private getWechatInfo(code): Promise<any> {
    const params = {
      js_code: code,
      secret: 'f8bb6a6f9d07f845d9d73ec7044d22bb',
      appid: 'wxcf34ad6fb04a200d',
      grant_type: 'authorization_code',
    };
    return lastValueFrom(
      this.httpService
        .get(
          'https://api.weixin.qq.com/sns/jscode2session?' +
            qs.stringify(params),
        )
        .pipe(
          map((response) => {
            return response.data;
          }),
        ),
    );
  }
}
