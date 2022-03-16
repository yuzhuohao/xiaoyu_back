import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TallyModule } from './modules/tally/tally.module';
import { UserModule } from './modules/user/user.module';
import { RecordModule } from './modules/record/record.module';
import { AnalysisController } from './modules/analysis/analysis.controller';
import { AnalysisService } from './modules/analysis/analysis.service';
import { AnalysisModule } from './modules/analysis/analysis.module';

@Module({
  imports: [
    CategoryModule,
    TallyModule,
    UserModule,
    RecordModule,
    TypeOrmModule.forRoot({
      port: 3306,
      type: 'mysql',
      username: 'tally',
      host: '150.158.170.90',
      charset: 'utf8mb4',
      password: 'yzh15397309288',
      database: 'tally',
      synchronize: true,
      autoLoadEntities: true,
    }),
    AnalysisModule,
  ],
  controllers: [AnalysisController],
  providers: [AnalysisService],
})
export class AppModule {}
