export class CreateMovieDto {
  /**
   * Deve ser inserido o nome do Filme
   * @example Harry Potter e a pedra filosofal
   */
  name: string;

  /**
   * Deve ser inserido o tema do Filme
   * @example Aventura
   */
  theme: string;

  /**
   * Deve ser inserido o ano de lançamento do Filme
   * @example 2002
   */
  year: Date;
}
