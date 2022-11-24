import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

const allMovies: Movie[] = [
  new Movie({
    id: 1,
    name: 'Harry Potter',
    theme: 'Aventura',
    year: new Date(),
  }),
  new Movie({
    id: 2,
    name: 'Os suspeitos',
    theme: 'Suspense',
    year: new Date(),
  }),
];

const movie: Movie = new Movie({
  id: 3,
  name: 'Sherlock Holmes',
  theme: 'Investigação',
  year: new Date(),
});

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: Repository<Movie>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getRepositoryToken(Movie),
          useValue: {
            find: jest.fn().mockResolvedValue(allMovies),
            findOneBy: jest.fn().mockResolvedValue(movie),
            update: jest.fn().mockResolvedValue(movie),
            delete: jest.fn().mockResolvedValue(1),
            create: jest.fn().mockResolvedValue(movie),
            save: jest.fn().mockResolvedValue(movie),
          },
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    repository = module.get<Repository<Movie>>(getRepositoryToken(Movie));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it('Deve retornar todos os movies com suscesso', async () => {
      const result = await service.findAll();

      expect(result).toEqual(allMovies);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('Deve retornar um usuário cujo tenha email igual ao passado por parametro', async () => {
      const result = await service.findOne(1);

      expect(result).toEqual(movie);
      expect(repository.findOneBy).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('Deve retornar os dados do movie atualizado', async () => {
      const result = await service.update(1, movie);

      expect(result).toEqual(movie);
      expect(repository.update).toHaveBeenCalled();
    });
  });

  describe('Remove', () => {
    it('Deve retornar o id do movie deletado', async () => {
      const result = await service.remove(1);

      expect(result).toEqual(1);
      expect(repository.delete).toHaveBeenCalled();
    });
  });

  describe('Create', () => {
    it('Deve trazer as informações do movie criado', async () => {
      const result = await service.create(movie);

      expect(result).toEqual(movie);
      expect(repository.create).toHaveBeenCalled();
      expect(repository.save).toHaveBeenCalled();
    });
  });
});
