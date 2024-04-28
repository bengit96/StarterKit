import { MigrationInterface, QueryRunner } from 'typeorm';
import { Health } from '../entities/health.entity';
import { appDataSource } from '../datasource-seed';

const health = {
  status: 'ok',
};

export class seed1652267579644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.insert(Health, health);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const entities = appDataSource.entityMetadatas;
    for (const entity of entities) {
      await queryRunner.query(
        `TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`,
      );
    }
  }
}
