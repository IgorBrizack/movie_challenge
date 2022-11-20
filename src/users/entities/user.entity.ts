import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { IsEmail } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @Column()
  @IsEmail()
  email: string;
}
