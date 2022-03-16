import { IsNotEmpty } from 'class-validator';

export class UpdateRecordDto {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;

  readonly name: string;

  readonly tally_id: number;

  readonly category_id: number;

  readonly amount: number;

  readonly record_time: string;
}
