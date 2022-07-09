import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Todo } from '../entity/todo.entity'
import { TodosService } from './todos.service'

describe('TodosService', () => {
  let service: TodosService

  const mockTodosRepository = {
    find() {},
    findOne() {},
    create() {},
    save() {},
    delete() {},
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: getRepositoryToken(Todo),
          useValue: mockTodosRepository,
        },
      ],
    }).compile()

    service = module.get<TodosService>(TodosService)
  })

  test('findAll', () => {
    jest
      .spyOn(mockTodosRepository, 'find')
      .mockImplementation(async () => new Todo())

    service.findAll()
    expect(mockTodosRepository.find)
  })

  test('findById', () => {
    const todo = new Todo()
    jest
      .spyOn(mockTodosRepository, 'findOne')
      .mockImplementation(async () => todo)

    service.findById('1')
    expect(mockTodosRepository.findOne).toBeCalledWith('1')
  })

  test('create', () => {
    const todo = new Todo()
    jest
      .spyOn(mockTodosRepository, 'create')
      .mockImplementation(async () => todo)
    jest.spyOn(mockTodosRepository, 'save').mockImplementation(async () => todo)

    const body = {
      name: 'test name',
      description: 'test description',
      startDate: new Date(),
      endDate: new Date(),
    }

    service.create(body)
    expect(mockTodosRepository.create).toBeCalledWith({
      ...body,
      isDone: false,
    })
    expect(mockTodosRepository.save)
  })

  test('update', () => {
    const todo = new Todo()
    jest.spyOn(mockTodosRepository, 'save').mockImplementation(async () => todo)

    const bodyName = { name: 'after name' }
    service.update('1', bodyName)
    expect(mockTodosRepository.save)

    const bodyDescription = { description: 'after description' }
    service.update('1', bodyDescription)
    expect(mockTodosRepository.save)
  })

  test('updateStatus', () => {
    const todo = new Todo()
    jest.spyOn(mockTodosRepository, 'save').mockImplementation(async () => todo)

    service.updateStatus('1')
    expect(mockTodosRepository.save)
  })

  test('delete', () => {
    const todo = new Todo()
    jest
      .spyOn(mockTodosRepository, 'delete')
      .mockImplementation(async () => todo)

    service.delete('1')
    expect(mockTodosRepository.delete)
  })
})
