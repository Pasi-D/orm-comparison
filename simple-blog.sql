-- Manually generated SQL schema

-- Create User Table
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(30) NOT NULL,
    `lastName` VARCHAR(30) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_idx`(`email`),
    PRIMARY KEY (`id`)
);

-- Create Profile Table
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_username_idx`(`username`),
    UNIQUE INDEX `Profile_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
);

-- Create Post Table
CREATE TABLE `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(200) NOT NULL,
    `content` LONGTEXT NULL,
    `authorId` INTEGER NULL,

    PRIMARY KEY (`id`)
);

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;