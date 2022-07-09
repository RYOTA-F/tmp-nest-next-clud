import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import { DB_CONFIG } from './dbconfig'

const ormconfig: MysqlConnectionOptions = {
  type: DB_CONFIG.type,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port,
  username: DB_CONFIG.user,
  password: DB_CONFIG.pass,
  database: DB_CONFIG.name,
  entities: ['dist/src/**/*.entity.js'],
}

export default ormconfig
