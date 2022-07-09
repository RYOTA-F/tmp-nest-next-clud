export type TTodo = {
  id: number
  name: string
  description: string
  startDate: Date
  endDate: Date
  isDone: boolean
}

export type TNewTodo = Omit<TTodo, 'id' | 'isDone'>

export type TUpdateTodo = { name?: string; description?: string }
