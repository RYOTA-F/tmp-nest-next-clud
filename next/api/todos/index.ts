/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Todo[]
  }

  post: {
    status: 200
    resBody: Types.Todo
    reqBody: Types.CreateTodoDTO
  }
}
