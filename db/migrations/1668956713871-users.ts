import { MigrationInterface, QueryRunner } from 'typeorm';

export class users1668956713871 implements MigrationInterface {
  name = 'users1668956713871';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL PRIMARY KEY , "name" varchar NOT NULL,"email" varchar NOT NULL, "password" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
