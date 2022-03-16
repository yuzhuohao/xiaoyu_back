import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { UpdateCategoryDto } from './dto/updateCategory.dto';
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get('getList')
  getCateory(@Query() query) {
    return this.categoryService.getByTallyId(query.tallyId);
  }
  @Get('default')
  getDefaultCategory() {
    return this.categoryService.getDefaultCategory();
  }
  @Post('add')
  @UsePipes(new ValidationPipe())
  addCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.addCategory(createCategoryDto);
  }
  @Post('update')
  @UsePipes(new ValidationPipe())
  updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.updateCategory(updateCategoryDto);
  }
  @Get('delete')
  deleteCategory(@Query() query) {
    return this.categoryService.deleteById(query.id);
  }
}
