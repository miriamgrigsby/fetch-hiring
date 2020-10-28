export interface Data {
  id: number
  listId: number
  name: string | null
}

export interface FetchedData {
  config?: any
  data: Data[]
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export interface Toasty {
  description: string
}
