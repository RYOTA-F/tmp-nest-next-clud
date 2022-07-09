import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodosModule } from './todos/todos.module'
import ormconfig from '@config/ormconfig'

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
