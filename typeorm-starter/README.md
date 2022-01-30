<div align="center">
  <h1>TypeORM Starter</h1>
</div>

![TypeORM](https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png)

A simple script written with TypeORM.

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

> ## TypeORM related commands

### Generating migrations based on the changes of the entities.

```bash
npm run migration:generate <<migration-name>>
```

### Running migrations

```bash
npm run migration:run
```

### Revert last migration

```bash
npm run migration:revert
```
