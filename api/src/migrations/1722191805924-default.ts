import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722191805924 implements MigrationInterface {
    name = 'Default1722191805924'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33"`);
        await queryRunner.query(`ALTER TABLE "taks" ALTER COLUMN "project_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33"`);
        await queryRunner.query(`ALTER TABLE "taks" ALTER COLUMN "project_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_084bf9c6eca165e5d29a07c6b33" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
