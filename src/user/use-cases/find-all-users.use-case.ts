import { Injectable } from '@nestjs/common';
import { UserEntity } from '../interfaces/user.entity';

@Injectable()
export class FindAllUsersUseCase {
  private users: UserEntity[] = [];

  async execute(): Promise<UserEntity[]> {
    return this.users;
  }
}
