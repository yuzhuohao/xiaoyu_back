import {
  Entity,
  Column,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category_template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Column()
  color: string;

  @Column()
  type: string;

  @CreateDateColumn()
  create_time: Timestamp;

  @UpdateDateColumn()
  update_time: Timestamp;
}
