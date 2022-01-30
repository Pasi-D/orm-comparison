import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserProfilePost1643547076163 implements MigrationInterface {
    name = "createUserProfilePost1643547076163";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE \`User\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(30) NOT NULL, \`lastName\` varchar(30) NOT NULL, \`email\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_4a257d2c9837248d70640b3e36\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
        await queryRunner.query(
            `CREATE TABLE \`Profile\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(30) NOT NULL, \`userId\` int NULL, UNIQUE INDEX \`REL_9e70fe39bace1b4fe0a96e5720\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
        await queryRunner.query(
            `CREATE TABLE \`Post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(200) NOT NULL, \`content\` longtext NOT NULL, \`authorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
        );
        await queryRunner.query(
            `ALTER TABLE \`Profile\` ADD CONSTRAINT \`FK_9e70fe39bace1b4fe0a96e57203\` FOREIGN KEY (\`userId\`) REFERENCES \`User\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
        await queryRunner.query(
            `ALTER TABLE \`Post\` ADD CONSTRAINT \`FK_cef8d6e8edb69c82e5f10bb4026\` FOREIGN KEY (\`authorId\`) REFERENCES \`Profile\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`Post\` DROP FOREIGN KEY \`FK_cef8d6e8edb69c82e5f10bb4026\``
        );
        await queryRunner.query(
            `ALTER TABLE \`Profile\` DROP FOREIGN KEY \`FK_9e70fe39bace1b4fe0a96e57203\``
        );
        await queryRunner.query(`DROP TABLE \`Post\``);
        await queryRunner.query(
            `DROP INDEX \`REL_9e70fe39bace1b4fe0a96e5720\` ON \`Profile\``
        );
        await queryRunner.query(`DROP TABLE \`Profile\``);
        await queryRunner.query(
            `DROP INDEX \`IDX_4a257d2c9837248d70640b3e36\` ON \`User\``
        );
        await queryRunner.query(`DROP TABLE \`User\``);
    }
}
