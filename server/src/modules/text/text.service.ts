/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Text } from '../../../entities/text.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TextService {
  constructor(
    @InjectRepository(Text) private textRepository: Repository<Text>,
  ) {}

  getOneById(id: string) {
    return this.textRepository.findOneOrFail(id);
  }

  createTextToShare(text: Text) {
    const textToShare = this.textRepository.create({ ...text });
    return this.textRepository.save(textToShare);
  }

  getAll() {
    return this.textRepository.find();
  }
}
