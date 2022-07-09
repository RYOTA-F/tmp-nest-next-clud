import type { TTodo } from '@type/todo'

export const todo: TTodo = {
  id: 1,
  name: 'Todo1',
  description: 'Todoのタスク1',
  startDate: new Date('2022-07-01 00:00:00'),
  endDate: new Date('2022-07-30 23:59:59'),
  isDone: false,
}
