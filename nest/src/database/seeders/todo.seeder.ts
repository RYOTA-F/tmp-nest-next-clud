import { Connection } from 'typeorm'
import { Factory, Seeder } from 'typeorm-seeding'
import { Todos } from '../../entity/todo.entity'
import { todos } from '../seeds/todo.seed'

export class CreateTodo implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Todos)
      .values(todos)
      .execute()
  }
}
