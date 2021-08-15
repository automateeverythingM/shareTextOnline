import {MigrationInterface, QueryRunner} from "typeorm";

export class TextMigration1629063536730 implements MigrationInterface {
    name = 'TextMigration1629063536730'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` ADD \`id\` char(36) NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`sharetextonline\`.\`text\` ADD PRIMARY KEY (\`id\`)`);
    }

}
