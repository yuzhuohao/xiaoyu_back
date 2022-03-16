import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from '../../entity/category.entity';
import { Category_template } from '../../entity/category_template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Category_template])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
