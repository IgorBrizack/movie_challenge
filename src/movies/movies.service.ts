import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    const allData: CreateMovieDto[] = await this.movieRepository.find();
    const hasSameData = allData.some((el) => el.name === createMovieDto.name);

    if (hasSameData)
      throw new HttpException('Movie already exist', HttpStatus.UNAUTHORIZED);

    const newMovie = this.movieRepository.create(createMovieDto);
    return this.movieRepository.save(newMovie);
  }

  findAll() {
    return this.movieRepository.find();
  }

  async findOne(id: number) {
    const movieById = await this.movieRepository.findOneBy({ id });
    if (!movieById) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return movieById;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movieById = await this.movieRepository.findOneBy({ id });
    if (!movieById) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return await this.movieRepository.update(id, updateMovieDto);
  }

  async remove(id: number) {
    const movieById = await this.movieRepository.findOneBy({ id });
    if (!movieById) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    return await this.movieRepository.delete(id);
  }
}
