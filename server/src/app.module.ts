import { TextModule } from './modules/text/text.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { sqliteConnectionOptions } from '../configs/db-config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', '/client'),
    }),
    TextModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(sqliteConnectionOptions),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
