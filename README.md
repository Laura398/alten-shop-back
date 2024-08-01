# Alten Shop Backend

## Description

This node.js backend is made with [Nest](https://github.com/nestjs/nest) and uses a dockerised MongoDB database. Nest id a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.

## Installation

```bash
$ npm install
```

## Starting Docker DB

```bash
# create DB
$ docker-compose up -d

# Import data from Json file
$ mongoimport --db alten-shop --collection products --file src/assets/products.json --jsonArray
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Server will be available at `http://localhost:3000`.

## API

| Resource           | POST                  | GET                            | PATCH                                    | PUT | DELETE           |
| ------------------ | --------------------- | ------------------------------ | ---------------------------------------- | --- | ---------------- |
| **/products**      | Create a new products | Retrieve all products          | X                                        | X   |     X            |
| **/products/1**    | X                     | Retrieve details for product 1 | Update details of product 1 if it exists | X   | Remove product 1 |
