import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import { User } from "../user/User.entity";
import { Post } from "../post/Post.entity";

@Entity("Profile")
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 30 })
    username: string;

    @OneToOne(() => User)
    @JoinColumn({ name: "userId" })
    user: User;

    @OneToMany(() => Post, (post) => post.author)
    post: Post;
}
