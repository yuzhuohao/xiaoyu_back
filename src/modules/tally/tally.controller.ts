import { Controller, Get, Post, UsePipes, Body, Query } from '@nestjs/common';
import { TallyService } from './tally.service';
import { CreateTallyDto } from './dto/createTally.dto';
import { UpdateTallyDto } from './dto/updatetally.dto';
import { ValidationPipe } from '../../pipes/validation.pipe';

@Controller('tally')
export class TallyController {
  constructor(private readonly tallyService: TallyService) {}
  @Get('getList')
  getCategory(@Query() query) {
    return this.tallyService.getTallyById(query.userId);
  }
  @Get('delete')
  deleteById(@Query() query) {
    return this, this.tallyService.deleteById(query.id);
  }
  @Post('add')
  @UsePipes(new ValidationPipe())
  addCategory(@Body() createTallyDto: CreateTallyDto) {
    return this.tallyService.addTally(createTallyDto);
  }
  @Post('update')
  @UsePipes(new ValidationPipe())
  updateCategory(@Body() updateTallyDto: UpdateTallyDto) {
    return this.tallyService.updateTally(updateTallyDto);
  }
}
