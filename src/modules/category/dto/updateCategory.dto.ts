import { IsNotEmpty } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;

  readonly name: string;

  readonly icon: string;

  readonly color: string;

  readonly type: string;

  readonly tally_id: number;
}
