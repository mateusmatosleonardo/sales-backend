import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto as CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './interfaces/user.entity';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { FindAllUsersUseCase } from './use-cases/find-all-users.use-case';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserUseCase,
    private readonly findAllUsersService: FindAllUsersUseCase,
  ) {}

  @Get('hello')
  async helloUser(): Promise<string> {
    return 'Hello User';
  }

  @Post('create')
  async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.createUserService.execute(createUser);
  }

  @Get('find-all')
  async listUser(): Promise<UserEntity[]> {
    return this.findAllUsersService.execute();
  }
}
