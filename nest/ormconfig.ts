import { DB_CONFIG } from './config/dbconfig'

const ormconfig = {
  type: DB_CONFIG.type,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.user,
  password: DB_CONFIG.pass,
  database: DB_CONFIG.name,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  seeds: ['src/database/seeders/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
  },
}

export default ormconfig
