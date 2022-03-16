import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tally } from '../../entity/tally.entity';

@Injectable()
export class TallyService {
  constructor(
    @InjectRepository(Tally)
    private tallyRepository: Repository<Tally>,
  ) {}
  async getTallyById(id) {
    const result = await this.tallyRepository.find({
      select: ['name', 'icon'],
      where: { user_id: id },
    });
    if (result.length == 0) {
      throw new NotFoundException('没有相关数据');
    }
    return result;
  }
  async deleteById(id) {
    const result = await this.tallyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('删除失败，账本不存在');
    }
    return result;
  }
  async addTally(body) {
    try {
      const a = await this.tallyRepository.save(body);
      return a;
    } catch (error) {
      console.log(`请求失败：${JSON.stringify(error)}`);
      return false;
    }
  }
  async updateTally(body) {
    const tally = await this.tallyRepository.findOne(body.id);
    if (!tally) {
      throw new NotFoundException('更新失败，账本不存在');
    }
    Object.assign(tally, body);
    return this.tallyRepository.update(body.id, tally);
  }
}
