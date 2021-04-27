import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDestroyedColumn1618652583766 implements MigrationInterface {
    name = 'CreateDestroyedColumn1618652583766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" ADD "destroyed" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "destroyed"`);
    }

}
