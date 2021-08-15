import { TextModule } from './modules/text/text.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionOptions } from '../configs/db-config';

@Module({
  imports: [
    TextModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(connectionOptions),
    TextModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
