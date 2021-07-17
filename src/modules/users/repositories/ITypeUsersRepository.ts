import { TypeUser } from "../entities/typeUsers";

export interface ICreateTypeUserDTO {
  name: string
}

export interface ITypeUsersRepository {
  list(): Promise<TypeUser[]>,
  create(data: ICreateTypeUserDTO): Promise<TypeUser>,
  remove(id: number): Promise<void>,
}