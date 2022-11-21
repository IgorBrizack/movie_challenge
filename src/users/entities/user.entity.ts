import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  @IsEmail()
  email: string;

  constructor(todo?: Partial<User>) {
    this.id = todo?.id;
    this.name = todo?.name;
    this.password = todo?.password;
    this.email = todo?.email;
  }
}
