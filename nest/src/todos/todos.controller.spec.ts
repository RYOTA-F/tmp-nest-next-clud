import { Test, TestingModule } from '@nestjs/testing'
import { TodosController } from './todos.controller'
import { Todo } from '../entity/todo.entity'
import { TodosService } from './todos.service'

describe('TodosController', () => {
  let controller: TodosController

  const mockTodosService = {
    findAll() {},
    findById() {},
    create() {},
    update() {},
    updateStatus() {},
    delete() {},
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [
        {
          provide: TodosService,
          useValue: mockTodosService,
        },
      ],
    }).compile()

    controller = module.get<TodosController>(TodosController)
  })

  test('findAll', () => {
    jest
      .spyOn(mockTodosService, 'findAll')
      .mockImplementation(async () => new Todo())

    controller.findAll()
    expect(mockTodosService.findAll)
  })

  test('findById', () => {
    jest
      .spyOn(mockTodosService, 'findById')
      .mockImplementation(async () => new Todo())

    controller.findById('1')
    expect(mockTodosService.findById).toBeCalledWith('1')
  })

  test('create', () => {
    jest
      .spyOn(mockTodosService, 'create')
      .mockImplementation(async () => new Todo())

    const body = {
      name: 'test name',
      description: 'test description',
      startDate: new Date(),
      endDate: new Date(),
    }

    controller.create(body)
    expect(mockTodosService.create).toBeCalledWith(body)
  })

  test('update', () => {
    jest
      .spyOn(mockTodosService, 'update')
      .mockImplementation(async () => new Todo())

    const body = {
      name: 'test name',
      description: 'test description',
      startDate: new Date(),
      endDate: new Date(),
    }

    controller.update('1', body)
    expect(mockTodosService.update).toBeCalledWith('1', body)
  })

  test('updateStatus', () => {
    jest
      .spyOn(mockTodosService, 'updateStatus')
      .mockImplementation(async () => new Todo())

    controller.updateStatus('1')
    expect(mockTodosService.updateStatus).toBeCalledWith('1')
  })

  test('delete', () => {
    jest
      .spyOn(mockTodosService, 'delete')
      .mockImplementation(async () => new Todo())

    controller.delete('1')
    expect(mockTodosService.delete).toBeCalledWith('1')
  })
})
