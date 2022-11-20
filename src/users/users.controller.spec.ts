import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

//REF https://www.youtube.com/watch?v=dXOfOgFFKuY&ab_channel=MariusEspejo
describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(mockUsersService)
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Deve criar um usuário', () => {
    expect(
      controller.create({
        name: 'Igor',
        email: 'igormail@mail.com',
        password: '12345',
      }),
    ).toEqual({
      id: expect.any(Number),
      name: 'Igor',
      email: 'igormail@mail.com',
      password: '12345',
    });
  });
});
