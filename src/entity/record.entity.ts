import {
  Entity,
  Column,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tally_id: number;

  @Column()
  category_id: number;

  @Column({
    type: 'float',
  })
  amount: number;

  @Column()
  name: string;

  @Column()
  record_time: Date;

  @CreateDateColumn()
  create_time: Timestamp;

  @UpdateDateColumn()
  update_time: Timestamp;
}
