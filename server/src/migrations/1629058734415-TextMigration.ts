import { MigrationInterface, QueryRunner } from 'typeorm';

export class TextMigration1629058734415 implements MigrationInterface {
  name = 'TextMigration1629058734415';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` CHANGE \`description\` \`expires\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` DROP COLUMN \`expires\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` ADD \`expires\` int NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` DROP COLUMN \`expires\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` ADD \`expires\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sharetextonline\`.\`text\` CHANGE \`expires\` \`description\` varchar(255) NOT NULL`,
    );
  }
}
