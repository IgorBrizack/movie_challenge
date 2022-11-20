import { MigrationInterface, QueryRunner } from 'typeorm';

export class movies1668956727236 implements MigrationInterface {
  name = 'movies1668956727236';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" SERIAL PRIMARY KEY , "moviename" varchar NOT NULL,"theme" varchar NOT NULL, "year" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movie"`);
  }
}
