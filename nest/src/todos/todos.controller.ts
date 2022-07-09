import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  HttpStatus,
} from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { TodosService } from './todos.service'
import { Todo } from '../entity/todo.entity'
import { CreateTodoDTO } from './todos.dto'

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @ApiResponse({ status: HttpStatus.OK, type: [Todo] })
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll()
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  async findById(@Param('id') id: string): Promise<Todo> {
    return this.todosService.findById(id)
  }

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  async create(@Body() createTodoDTO: CreateTodoDTO): Promise<Todo> {
    return await this.todosService.create(createTodoDTO)
  }

  @Put(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  async update(
    @Param('id') id: string,
    @Body() createTodoDTO: CreateTodoDTO
  ): Promise<Todo> {
    return await this.todosService.update(id, createTodoDTO)
  }

  @Patch(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Todo })
  async updateStatus(@Param('id') id: string): Promise<Todo> {
    return await this.todosService.updateStatus(id)
  }

  @Delete(':id')
  @ApiResponse({ status: HttpStatus.OK, type: Boolean })
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.todosService.delete(id)
  }
}
