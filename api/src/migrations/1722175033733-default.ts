import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722175033733 implements MigrationInterface {
    name = 'Default1722175033733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "UsersProjects" ("projectsId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_c33eb6291abe04de45f70d41cff" PRIMARY KEY ("projectsId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3e2cedcc07fabeb553ace13aff" ON "UsersProjects" ("projectsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_fb1f1ab0b8fc366b7e863659ba" ON "UsersProjects" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" ADD CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_fb1f1ab0b8fc366b7e863659bae"`);
        await queryRunner.query(`ALTER TABLE "UsersProjects" DROP CONSTRAINT "FK_3e2cedcc07fabeb553ace13aff5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fb1f1ab0b8fc366b7e863659ba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3e2cedcc07fabeb553ace13aff"`);
        await queryRunner.query(`DROP TABLE "UsersProjects"`);
    }

}
