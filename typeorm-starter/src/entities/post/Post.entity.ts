import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
} from "typeorm";
import { Profile } from "../profile/Profile.entity";

@Entity("Post")
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 200 })
    title: string;

    @Column("longtext")
    content: string;

    @ManyToOne(() => Profile, (author) => author.id)
    author: Profile;
}
