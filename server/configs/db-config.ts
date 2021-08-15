import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const connectionOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  database: 'sharetextonline',
  username: 'root',
  password: '',
  host: 'localhost',
  port: 3306,
  entities: ['dist/**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  migrations: ['dist/**/*.migrations.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};