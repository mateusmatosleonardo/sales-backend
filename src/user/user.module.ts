import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './use-cases/find-all-users.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './interfaces/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [CreateUserUseCase, FindAllUsersUseCase],
})
export class UserModule {}
