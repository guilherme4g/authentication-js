import { UserType } from '../entities/userType';

export interface ICreateUserTypeDTO {
  name: string
}

export interface IUserTypeRepository {
  list(): Promise<UserType[]>,
  create(data: ICreateUserTypeDTO): Promise<UserType>,
  remove(id: number): Promise<void>,
}
