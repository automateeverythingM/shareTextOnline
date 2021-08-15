import { Body, Get, Post } from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Param } from '@nestjs/common';
import { Text } from 'entities/text.entity';
import { TextService } from './text.service';

@Controller('shared')
export class TextController {
  constructor(private textService: TextService) {}

  @Get()
  test() {
    return 'WORKS';
  }
  @Get(':id')
  getText(@Param('id') id) {
    return this.textService.getOneById(id);
  }

  @Post()
  createTextToShare(@Body() text: Text) {
    return this.textService.createTextToShare(text);
  }
}
