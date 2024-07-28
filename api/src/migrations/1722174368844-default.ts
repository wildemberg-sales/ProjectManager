import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1722174368844 implements MigrationInterface {
    name = 'Default1722174368844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."taks_status_enum" AS ENUM('pendente', 'em andamento', 'concluido')`);
        await queryRunner.query(`CREATE TYPE "public"."taks_priority_enum" AS ENUM('baixa', 'média', 'alta')`);
        await queryRunner.query(`CREATE TABLE "taks" ("id" SERIAL NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "status" "public"."taks_status_enum" NOT NULL DEFAULT 'pendente', "priority" "public"."taks_priority_enum" NOT NULL, "term" text NOT NULL, "responsibleId" integer, "projectId" integer, CONSTRAINT "PK_86830a85dcafb5d3a8f71393c91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."projects_status_enum" AS ENUM('pendente', 'em andamento', 'concluido')`);
        await queryRunner.query(`CREATE TABLE "projects" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "status" "public"."projects_status_enum" NOT NULL DEFAULT 'pendente', "progress" integer NOT NULL DEFAULT '0', "term" text NOT NULL, CONSTRAINT "PK_6271df0a7aed1d6c0691ce6ac50" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_c36a495b2a982d32867f1ddf256" FOREIGN KEY ("responsibleId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "taks" ADD CONSTRAINT "FK_73eda791e6ed7767fab8cd4e61a" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_73eda791e6ed7767fab8cd4e61a"`);
        await queryRunner.query(`ALTER TABLE "taks" DROP CONSTRAINT "FK_c36a495b2a982d32867f1ddf256"`);
        await queryRunner.query(`DROP TABLE "projects"`);
        await queryRunner.query(`DROP TYPE "public"."projects_status_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "taks"`);
        await queryRunner.query(`DROP TYPE "public"."taks_priority_enum"`);
        await queryRunner.query(`DROP TYPE "public"."taks_status_enum"`);
    }

}
