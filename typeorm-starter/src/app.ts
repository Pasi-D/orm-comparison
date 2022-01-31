import "reflect-metadata";
import { getManager, createConnection, getConnectionOptions } from "typeorm";

import { User } from "entities/user/User.entity";
import { Profile } from "entities/profile/Profile.entity";
import { Post } from "entities/post/Post.entity";

class App {
    public async main(): Promise<void> {
        const connectionOptions = await getConnectionOptions();
        createConnection({
            ...connectionOptions,
            entities: ["src/entities/**/*.entity.ts"],
            migrations: ["src/migration/**/*.ts"],
            subscribers: ["src/subscriber/**/*.ts"]
        })
            .then(async () => {
                const savedData = await getManager().transaction(
                    async (transactionEntityManager) => {
                        const user = User.create({
                            firstName: "Dan",
                            lastName: "Brown",
                            email: "Dan@brown.com"
                        });
                        const profile = Profile.create({
                            username: "Dan-Brown"
                        });

                        const posts = Post.create([
                            {
                                title: "The Da Vinci Code",
                                content: "Not about coding."
                            },
                            {
                                title: "The Lost Symbol",
                                content: "Still lost thanks to masons."
                            }
                        ]);
                        profile.user = user;
                        posts.map((post) => (post.author = profile));
                        await transactionEntityManager.save(user);
                        await transactionEntityManager.save(profile);
                        await transactionEntityManager.save(posts);
                        return { user, profile, posts };
                    }
                );
                console.log(`Query Result : ${JSON.stringify(savedData)}`);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => {
                process.exit();
            });
    }
}

export default App;
