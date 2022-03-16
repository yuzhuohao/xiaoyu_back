import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../entity/category.entity';
import { Category_template } from '../../entity/category_template.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,

    @InjectRepository(Category_template)
    private categoryTempalteRepository: Repository<Category_template>,
  ) {}

  getDefaultCategory() {
    return this.categoryTempalteRepository.find({
      select: ['id', 'name', 'icon', 'color', 'type'],
    });
  }

  async getByTallyId(id) {
    const result = await this.categoryRepository.find({
      select: ['id', 'name', 'icon', 'color', 'type'],
      where: { tally_id: id },
    });
    if (result.length === 0) {
      throw new NotFoundException('查询失败，没有相关数据');
    }
    return result;
  }

  async deleteById(id) {
    const result = await this.categoryRepository.delete(id);
    console.log('result', result.affected);
    if (result.affected === 0) {
      throw new NotFoundException('删除失败，目录不存在');
    }
    return result;
  }

  async addCategory(body) {
    try {
      const result = await this.categoryRepository.save(body);
      return result;
    } catch (error) {
      console.log(`请求失败：${JSON.stringify(error)}`);
      return false;
    }
  }
  async updateCategory(body) {
    const category = await this.categoryRepository.findOne(body.id);
    if (!category) {
      throw new NotFoundException('更新失败，目录不存在');
    }
    Object.assign(category, body);
    return this.categoryRepository.update(body.id, category);
  }
}
