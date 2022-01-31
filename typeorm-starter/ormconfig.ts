module.exports = {
    type: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    entities: ["dist/src/entities/**/*.entity.js"],
    migrations: ["dist/src/migration/**/*.js"],
    subscribers: ["dist/src/subscriber/**/*.js"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    }
};
