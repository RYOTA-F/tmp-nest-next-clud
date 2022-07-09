import {MigrationInterface, QueryRunner} from "typeorm";

export class TodoMigration1657369378672 implements MigrationInterface {
    name = 'TodoMigration1657369378672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`startDate\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`endDate\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`isDone\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`todo\``);
    }

}
