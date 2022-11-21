import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './entities/movie.entity';
import { MoviesController } from './movies.controller';
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
  id: 1,
  name: 'igor',
  theme: 'igor@mail.com',
  year: new Date(),
});

describe('MoviesController', () => {
  let controller: MoviesController;
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(allMovies),
            create: jest.fn().mockResolvedValue(movie),
            update: jest.fn().mockResolvedValue(movie),
            remove: jest.fn().mockResolvedValue('1'),
          },
        },
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get<MoviesService>(MoviesService);
  });

  it('Deve trazer todos os movies', async () => {
    const result = await controller.findAll();

    expect(result).toEqual(allMovies);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('Deve atualizar um movie', async () => {
    const result = await controller.update('1', movie);

    expect(result).toEqual(movie);
    expect(service.update).toHaveBeenCalled();
  });

  it('Deve deletar um movie ao passar um id', async () => {
    const result = await controller.remove('1');

    expect(result).toEqual('1');
    expect(service.remove).toHaveBeenCalled();
  });

  it('Deve criar um movie ao passar um novo user', async () => {
    const result = await controller.create(movie);

    expect(result).toEqual(movie);
    expect(service.create).toHaveBeenCalled();
  });
});
