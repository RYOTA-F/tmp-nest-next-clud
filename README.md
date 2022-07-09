# TMP Next.js × Next.js × MySQL

## Setup

1. Env Setting

   a. Copy .env

   ```
   $ cp .env_example .env
   ```

   b. Edit .env

2. Build

```sh
$ docker-compose build
```

3. Nest install

```sh
$ docker-compose run --rm api yarn install
```

4. Next install

```sh
$ docker-compose run --rm front yarn install
```

5. TypeORM Migration

```sh
$ docker-compose run --rm api yarn migration:r
```

6. TypeORM Seed Run

```sh
$ docker-compose run --rm api yarn seed:r
```

---

## Run

### Docker Run

```
$ docker-compose up -d
```

---

## Access

### Front

```
localhost:8080/
```

### Storybook

```
localhost:6006/
```

### API

```
localhost:3000/api/
```

---

## TypeORM

### Migration Generate

```sh
$ docker-compose run --rm api yarn migration:g {Model}Migration
```

### Migration Run

```sh
$ docker-compose run --rm api yarn migration:r
```

### Seed Run

```sh
$ docker-compose run --rm api yarn seed:r
```

---

## NestJS

### Create Module

```sh
$ docker-compose run --rm api yarn nest g module {module_name}

```

### Create Controller

```sh
$ docker-compose run --rm api yarn nest g controller {module_name}
```

### Create Service

```sh
$ docker-compose run --rm api yarn nest g service {module_name}
```

---

## Lint

### Nest: ESLint

```sh
$ docker-compose run --rm api yarn lint
```

### Next: ESLint

```sh
$ docker-compose run --rm front yarn lint
```

### Next: ESLint:Fix

```sh
$ docker-compose run --rm front yarn lint:fix
```

---

## Test

### Nest: Jest

```sh
$ docker-compose run --rm api yarn test
```
