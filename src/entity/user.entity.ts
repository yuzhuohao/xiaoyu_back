import {
  Entity,
  Column,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openid: string;

  @CreateDateColumn()
  create_time: Timestamp;

  @UpdateDateColumn()
  update_time: Timestamp;
}
