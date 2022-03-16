import { IsNotEmpty } from 'class-validator';

export class UpdateTallyDto {
  @IsNotEmpty({ message: 'id不能为空' })
  readonly id: number;

  readonly icon: string;

  readonly name: string;
}
