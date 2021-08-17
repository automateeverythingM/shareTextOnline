import { Body, Get, ParseUUIDPipe, Post, UsePipes } from '@nestjs/common';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Param } from '@nestjs/common';
import { Text } from 'entities/text.entity';
import { TextSchema } from 'schemasValidation/text';
import { JoiValidationPipe } from 'src/pipes/joi-validation.pipe';
import { TextService } from './text.service';

@Controller('shared')
export class TextController {
  constructor(private textService: TextService) {}

  @Get()
  getAll() {
    return this.textService.getAll();
  }

  @Get(':id')
  getText(@Param('id', new ParseUUIDPipe()) id) {
    return this.textService.getOneById(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(TextSchema))
  createTextToShare(@Body() text: Text) {
    return this.textService.createTextToShare(text);
  }
}
