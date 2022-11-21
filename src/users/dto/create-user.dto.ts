import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Deve ser inserido o nome do usuário',
    example: 'João',
  })
  name: string;

  @ApiProperty({
    description: 'Deve ser inserido o password do usuário',
    example: 'Joao123apiPassword',
  })
  password: string;

  @ApiProperty({
    description: 'Deve ser inserido o email do usuário',
    example: 'joao@mail.com',
  })
  email: string;
}
