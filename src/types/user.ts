export interface User {
  id: number,
  nickname: string,
  username?: string
}

export interface State{
  users: User[]
}