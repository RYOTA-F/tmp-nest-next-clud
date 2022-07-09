import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodosController } from './todos.controller'
import { TodosService } from './todos.service'
import { Todos } from '@entity/todo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Todos])],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TypeOrmModule],
})
export class TodosModule {}
