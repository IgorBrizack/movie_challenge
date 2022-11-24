import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

//Ref: https://www.youtube.com/watch?v=igrlZqviOiI&ab_channel=leobritob
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
  name: 'João',
  email: 'joao@mail.com',
  password: '1234565',
});

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn().mockResolvedValue(allUser),
            findOne: jest.fn().mockResolvedValue(user),
            findOneBy: jest.fn().mockResolvedValue(user),
            update: jest.fn().mockResolvedValue(user),
            delete: jest.fn().mockResolvedValue(1),
            create: jest.fn().mockResolvedValue(user),
            save: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('findAll', () => {
    it('Deve retornar todos os usuários com suscesso', async () => {
      const result = await service.findAll();

      expect(result).toEqual(allUser);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('getByEmail', () => {
    it('Deve retornar um usuário cujo tenha email igual ao passado por parametro', async () => {
      const result = await service.getByEmail('igor@mail.com');

      expect(result).toEqual(user);
      expect(repository.findOne).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('Deve retornar os dados do usuário atualizado', async () => {
      const result = await service.update(1, user);

      expect(result).toEqual(user);
      expect(repository.update).toHaveBeenCalled();
    });
  });

  describe('Remove', () => {
    it('Deve retornar o id do usuário deletado', async () => {
      const result = await service.remove(1);

      expect(result).toEqual(1);
      expect(repository.delete).toHaveBeenCalled();
    });
  });

  describe('Create', () => {
    it('Deve trazer as informações do usuário criado', async () => {
      const result = await service.create(user);

      expect(result).toEqual(user);
      expect(repository.create).toHaveBeenCalled();
      expect(repository.save).toHaveBeenCalled();
    });
  });
});
