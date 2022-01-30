import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 30 })
    firstName: string;

    @Column("varchar", { length: 30 })
    lastName: string;

    @Column("varchar", { length: 255, unique: true })
    email: string;
}
