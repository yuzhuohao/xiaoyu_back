import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Record } from '../../entity/record.entity';
import { Category } from '../../entity/category.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(Record)
    private recordRepository: Repository<Record>,
  ) {}
  async getByTallyId(id) {
    const records = await this.recordRepository
      .createQueryBuilder('record')
      .leftJoinAndSelect(
        Category,
        'category',
        'record.category_id = category.id',
      )
      .select(
        `
        record.id as id,
        record.name as name,
        record.amount as amount,
        record.record_time as record_time,
        category.icon as icon,
        category.type as type,
        category.color as color,
        category.name as category
      `,
      )
      .where({ tally_id: id })
      .getRawMany();
    if (records.length == 0) {
      throw new NotFoundException('没有记录');
    }
    return records;
  }
  async addRecord(body) {
    try {
      const result = await this.recordRepository.save(body);
      return result;
    } catch (error) {
      console.log(`请求失败：${JSON.stringify(error)}`);
      return false;
    }
  }
  async deleteById(id) {
    const result = await this.recordRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('删除失败，记录不存在');
    }
    return result;
  }
  async updateRecord(body) {
    const record = await this.recordRepository.findOne(body.id);
    if (!record) {
      throw new NotFoundException('更新失败，记录不存在');
    }
    Object.assign(record, body);
    return this.recordRepository.update(body.id, record);
  }
}
