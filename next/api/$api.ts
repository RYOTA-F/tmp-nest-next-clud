import type { AspidaClient, BasicHeaders } from 'aspida'
import type { Methods as Methods0 } from './todos'
import type { Methods as Methods1 } from './todos/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/todos'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    todos: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json(),
          $put: (option: { body: Methods1['put']['reqBody'], config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['patch']['resBody'], BasicHeaders, Methods1['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
