type TDB_CONFIG = {
  type: 'mysql' | 'mariadb'
  host: string
  name: string
  user: string
  pass: string
  port: number
}

export const DB_CONFIG: TDB_CONFIG = {
  type: 'mysql',
  host: 'db',
  name: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  pass: process.env.MYSQL_PASSWORD,
  port: Number(process.env.DB_PORT),
}
