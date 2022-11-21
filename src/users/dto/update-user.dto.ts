export class UpdateUserDto {
  /**
   * Deve ser inserio o nome do usuário
   * @example João
   */
  name: string;

  /**
   * Deve ser inserido o password do usuário
   * @example Joao123apiPassword
   */
  password: string;

  /**
   * Deve ser inserido o email do usuário
   * @example Joao123apiPassword
   */
  email: string;
}
