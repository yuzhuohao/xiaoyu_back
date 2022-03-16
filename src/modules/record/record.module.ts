import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from '../../entity/record.entity';
import { Category } from '../../entity/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record, Category])],
  providers: [RecordService],
  controllers: [RecordController],
})
export class RecordModule {}
