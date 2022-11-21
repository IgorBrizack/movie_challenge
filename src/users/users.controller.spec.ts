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

const user: User = new User({
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
            create: jest.fn().mockResolvedValue(user),
            update: jest.fn().mockResolvedValue(user),
            remove: jest.fn().mockResolvedValue('1'),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('Deve trazer todos os usuários', async () => {
    const result = await controller.findAll();

    expect(result).toEqual(allUser);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('Deve atualizar um usuário', async () => {
    const result = await controller.update('1', user);

    expect(result).toEqual(user);
    expect(service.update).toHaveBeenCalled();
  });

  it('Deve deletar um usuário ao passar um id', async () => {
    const result = await controller.remove('1');

    expect(result).toEqual('1');
    expect(service.remove).toHaveBeenCalled();
  });

  it('Deve criar um usuário ao passar um novo user', async () => {
    const result = await controller.create(user);

    expect(result).toEqual(user);
    expect(service.create).toHaveBeenCalled();
  });
});
