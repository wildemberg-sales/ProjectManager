import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722198659891 implements MigrationInterface {
    name = 'Default1722198659891'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
