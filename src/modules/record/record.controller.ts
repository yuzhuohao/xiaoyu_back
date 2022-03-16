import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from './dto/createRecord.dto';
import { UpdateRecordDto } from './dto/updateRecord.dto';
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}
  @Get('getList')
  getRecord(@Query() query) {
    return this.recordService.getByTallyId(query.tallyId);
  }
  @Post('add')
  @UsePipes(new ValidationPipe())
  addRecord(@Body() createRecordDto: CreateRecordDto) {
    return this.recordService.addRecord(createRecordDto);
  }
  @Post('update')
  updateRecord(@Body() updateRecordDto: UpdateRecordDto) {
    return this.recordService.updateRecord(updateRecordDto);
  }
  @Get('delete')
  deleteRecord(@Query() query) {
    return this.recordService.deleteById(query.id);
  }
}
