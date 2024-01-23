import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'Mt@85752636',
      database: 'sales',
      synchronize: true,
      entities: [`${__dirname}/**/*.entity.{js,.ts}`],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
