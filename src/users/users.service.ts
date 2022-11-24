import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const allData: CreateUserDto[] = await this.usersRepository.find();
    const hasSameData = allData.some((el) => el.email === createUserDto.email);

    if (hasSameData)
      throw new HttpException(
        'User mail already exist',
        HttpStatus.UNAUTHORIZED,
      );

    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async findAll() {
    return this.usersRepository.find();
  }

  async getByEmail(email: string) {
    return await this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userById = await this.usersRepository.findOneBy({ id });
    if (!userById) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const userById = await this.usersRepository.findOneBy({ id });
    if (!userById) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return await this.usersRepository.delete(id);
  }
}
