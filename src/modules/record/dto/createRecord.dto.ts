import { IsNotEmpty } from 'class-validator';

export class CreateRecordDto {
  readonly name: string;

  @IsNotEmpty({ message: 'tally_id不能为空' })
  readonly tally_id: number;

  @IsNotEmpty({ message: 'category_id不能为空' })
  readonly category_id: number;

  @IsNotEmpty({ message: '金额不能为空' })
  readonly amount: number;

  @IsNotEmpty({ message: '账单时间不能为空' })
  readonly record_time: string;
}
