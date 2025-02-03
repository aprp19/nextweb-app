export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface UserModel {
  users: User[]
}

export const userDefault: UserModel = {
  users: []
}

export enum UserActionType {
  GetUsers = 'User->GetUsers'
}

export type UserAction = {
  data: User[]
  type: UserActionType.GetUsers
}
