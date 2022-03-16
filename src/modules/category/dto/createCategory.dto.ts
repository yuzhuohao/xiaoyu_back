import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: '名称不能为空' })
  readonly name: string;

  @IsNotEmpty({ message: '图标不能为空' })
  readonly icon: string;

  @IsNotEmpty({ message: '颜色不能为空' })
  readonly color: string;

  @IsNotEmpty({ message: '类型不能为空' })
  readonly type: string;

  @IsNotEmpty({ message: '账单id不能为空' })
  readonly tally_id: string;
}
