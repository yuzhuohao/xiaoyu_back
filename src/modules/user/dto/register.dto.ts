import { IsNotEmpty } from 'class-validator';

export class CreateTallyDto {
  @IsNotEmpty({ message: '名称不能为空' })
  readonly weId: string;

  @IsNotEmpty({ message: '图标不能为空' })
  readonly icon: string;

  @IsNotEmpty({ message: '用户id不能为空' })
  readonly user_id: string;
}
