export type TParamMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export type TParams = {
  method: TParamMethod
  headers: { 'Content-Type': 'application/json' }
  body?: string
}
