import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserIdColumn1618604908127 implements MigrationInterface {
    name = 'AddUserIdColumn1618604908127'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" ADD "userId" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "userId"`);
    }

}
