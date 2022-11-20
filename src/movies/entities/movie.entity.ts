import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moviename: string;

  @Column()
  theme: string;

  @Column()
  year: Date;
}
