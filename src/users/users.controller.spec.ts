import { Test, TestingModule } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

//REF https://www.youtube.com/watch?v=dXOfOgFFKuY&ab_channel=MariusEspejo
// https://www.youtube.com/watch?v=p1hzHVgG6bI&ab_channel=leobritob

const allUser: User[] = [
  new User({
    id: 1,
    name: 'igor',
    email: 'igor@mail.com',
    password: '1234565',
  }),
  new User({
    id: 1,
    name: 'bruno',
    email: 'bruno@mail.com',
    password: '123456',
  }),
];

const createdUser: User = new User({
  id: 1,
  name: 'igor',
  email: 'igor@mail.com',
  password: '1234565',
});

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(allUser),
            create: jest.fn(),
            update: jest.fn().mockResolvedValue(createdUser),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  // it('Deve criar um usuário', () => {
  //   expect(
  //     controller.create({
  //       name: 'Igor',
  //       email: 'igormail@mail.com',
  //       password: '12345',
  //     }),
  //   ).toEqual({
  //     id: expect.any(Number),
  //     name: 'Igor',
  //     email: 'igormail@mail.com',
  //     password: '12345',
  //   });

  //   expect(mockUsersService.create).toHaveBeenCalledWith({
  //     name: 'Igor',
  //     email: 'igormail@mail.com',
  //     password: '12345',
  //   });
  // });

  // it('Deve atualizar um usuário', () => {
  //   const dto = {
  //     name: 'Igor',
  //     email: 'igormail@mail.com',
  //     password: '12345',
  //   };

  //   expect(controller.update('1', dto)).toEqual({
  //     id: 1,
  //     ...dto,
  //   });

  //   expect(mockUsersService.update).toHaveBeenCalled();
  // });

  it('Deve trazer todos os usuários', async () => {
    const result = await controller.findAll();

    expect(result).toEqual(allUser);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('Deve atualizar um usuário', async () => {
    const result = await controller.update('1', createdUser);

    expect(result).toEqual(createdUser);
    expect(service.update).toHaveBeenCalled();
  });
});
