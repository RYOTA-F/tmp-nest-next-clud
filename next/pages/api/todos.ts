/* constants */
import { TODOS_API_ENDPOINT } from '@constants/api'
/* types */
import { TParamMethod, TParams } from '@type/api'
import { TTodo, TNewTodo, TUpdateTodo } from '@type/todo'

/**
 * Todo: fetchTodoAPI
 */
const fetchTodoApi = async (
  method: TParamMethod,
  endpoint: string,
  body?: TNewTodo | TUpdateTodo
) => {
  const params: TParams = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  }
  if (body) params.body = JSON.stringify(body)

  const res = await fetch(endpoint, params)
  const resJson = await res.json()

  return resJson
}

/**
 * Todo: 新規作成API
 * @module Pages/API/Todos/createTodo
 */
export const createTodo = async (todo: TNewTodo): Promise<TTodo> => {
  return await fetchTodoApi('POST', `${TODOS_API_ENDPOINT}`, todo)
}

/**
 * Todo: 更新API
 * @module Pages/API/Todos/updateTodo
 */
export const updateTodo = async (
  id: number,
  body: TUpdateTodo
): Promise<TTodo> => {
  const res = await fetchTodoApi('PUT', `${TODOS_API_ENDPOINT}${id}`, body)
  return res
}

/**
 * Todo: ステータス更新API
 * @module Pages/API/Todos/updateTodoStatus
 */
export const updateTodoStatus = async (id: number): Promise<TTodo> => {
  return await fetchTodoApi('PATCH', `${TODOS_API_ENDPOINT}${id}`)
}

/**
 * Todo: 削除API
 * @module Pages/API/Todos/deleteTodo
 */
export const deleteTodo = async (id: number): Promise<boolean> => {
  return await fetchTodoApi('DELETE', `${TODOS_API_ENDPOINT}${id}`)
}
