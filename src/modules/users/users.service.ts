import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(input: CreateUserDto): Promise<UserEntity> {
    try {
      const user = this.userRepository.create({
        name: input.name,
        email: input.email,
      });
      return this.userRepository.save(user);
    } catch (error) {
      throw new Error(`Failed to create user: ${(error as Error).message}`);
    }
  }

  async findAll(): Promise<UserEntity[] | null> {
    try {
      const allUser = await this.userRepository.find();
      return allUser;
    } catch (error) {
      throw new Error(`Failed to find users: ${(error as Error).message}`);
    }
  }

  async findOne(id: string): Promise<UserEntity | null> {
    try {
      const user = await this.userRepository.findOneBy({ id });
      return user;
    } catch (error) {
      throw new Error(`Failed to find user: ${(error as Error).message}`);
    }
  }

  async update(
    id: string,
    updateData: Partial<UserEntity>,
  ): Promise<UserEntity | null> {
    try {
      await this.userRepository.update(id, updateData);
      return this.findOne(id);
    } catch (error) {
      throw new Error(`Failed to update user: ${(error as Error).message}`);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.userRepository.delete(id);
    } catch (error) {
      throw new Error(`Failed to remove user: ${(error as Error).message}`);
    }
  }
}
