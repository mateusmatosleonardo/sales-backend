import { Injectable } from '@nestjs/common';
import { UserEntity } from '../interfaces/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FindAllUsersUseCase {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
