/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Todo
  }

  put: {
    status: 200
    resBody: Types.Todo
    reqBody: Types.CreateTodoDTO
  }

  patch: {
    status: 200
    resBody: Types.Todo
  }

  delete: {
    status: 200
    resBody: boolean
  }
}
