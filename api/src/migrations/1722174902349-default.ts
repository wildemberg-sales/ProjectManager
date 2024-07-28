import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722174902349 implements MigrationInterface {
    name = 'Default1722174902349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_c36a495b2a982d32867f1ddf256"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_73eda791e6ed7767fab8cd4e61a"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP COLUMN "responsibleId"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP COLUMN "projectId"`);
        await queryRunner.query(`ALTER TABLE "taks" ADD "responsible_id" integer`);
        await queryRunner.query(`ALTER TABLE "taks" ADD "project_id" integer`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_4a3cad13197a7f804e31193615e" FOREIGN KEY ("responsible_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_4a3cad13197a7f804e31193615e"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP COLUMN "project_id"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP COLUMN "responsible_id"`);
        await queryRunner.query(`ALTER TABLE "taks" ADD "projectId" integer`);
        await queryRunner.query(`ALTER TABLE "taks" ADD "responsibleId" integer`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_73eda791e6ed7767fab8cd4e61a" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_c36a495b2a982d32867f1ddf256" FOREIGN KEY ("responsibleId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
