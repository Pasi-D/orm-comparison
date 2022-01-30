<div align="center">
  <h1>Prisma Starter</h1>
</div>

![Prisma](https://i.imgur.com/h6UIYTu.png)

A simple script written with Prisma ◭

You can find the articles associated with this project.

1. [Simplify backend development with Prisma](https://javascript.plainenglish.io/simplifying-backend-development-with-prisma-564200f31943)
2. [A deep dive into Prisma Schema](https://javascript.plainenglish.io/diving-into-prisma-schema-b278e92dff8b)
3. [Data modeling with Prisma](https://pasindu-dilshan.medium.com/data-modeling-with-prisma-5c4c37f31d8c)


> ## Prerequisites

### Use the appropriate node version

If you don't have node installed install the version defined in `.nvmrc`. You can use [nvm](https://github.com/nvm-sh/nvm) to manage the node version.

```bash
nvm use
```

### Update environment variables

Create a copy of `.env.dist` and make the appropriate changes in your `.env` file

```bash
cp .env.dist .env
```
> ## Running Locally

### Install dependencies

You can use either `npm` or `yarn` (If using `yarn` please remove ```package-lock.json``` file first)
```bash
npm install
```
### Run the script

```bash
npm run serve
```

### Check Linting

```bash
npm run lint
```
