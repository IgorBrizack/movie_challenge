import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Deve ser passado um email',
    example: 'joao@mail.com',
  })
  email: string;

  @ApiProperty({
    description: 'Deve ser passado um password',
    example: 'Joao123apiPassword',
  })
  password: string;
}
