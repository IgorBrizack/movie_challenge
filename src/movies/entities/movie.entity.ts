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

  constructor(todo?: Partial<Movie>) {
    this.id = todo?.id;
    this.moviename = todo?.moviename;
    this.theme = todo?.theme;
    this.year = todo?.year;
  }
}
