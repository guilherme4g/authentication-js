import { TypeUser } from "../entities/typeUsers";

export interface ITypeUsersRepository {
  list(): Promise<TypeUser[]>,
  create(typesUser: TypeUser): Promise<TypeUser>,
  remove(id: number): Promise<void>,
}