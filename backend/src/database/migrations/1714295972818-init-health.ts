import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitHealth1714295972818 implements MigrationInterface {
  name = 'InitHealth1714295972818';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "health" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_8a1d6d8c0c85c1791b359854e83" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "health"`);
  }
}
