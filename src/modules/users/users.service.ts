import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(
    name: string,
    email: string,
    role: UserEntity['role'],
  ): Promise<UserEntity> {
    const user = this.userRepository.create({ name, email, role });
    return this.userRepository.save(user);
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateData: Partial<UserEntity>,
  ): Promise<UserEntity | null> {
    await this.userRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
