import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TallyController } from './tally.controller';
import { TallyService } from './tally.service';
import { Tally } from '../../entity/tally.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tally])],
  controllers: [TallyController],
  providers: [TallyService],
})
export class TallyModule {}
