type Client = {
  id: string
  name?: string
  email?: string
  phone?: string
  active?: boolean
  created?: number
  changes?: ArrayLike<any>
	plan?: string
}

export { Client }
