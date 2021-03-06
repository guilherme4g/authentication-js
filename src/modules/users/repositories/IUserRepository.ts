import { User } from '../entities/user';

export interface ICreateUserDTO {
  name: string,
  email: string,
  password: string,
  typeUser: string,
}

export interface IUserRepository {
  list(): Promise<User[]>,
  findById(id: string): Promise<User | undefined>,
  findByEmail(email: string): Promise<User | undefined>,
  create(data: ICreateUserDTO): Promise<User>,
  remove(id: string): Promise<void>,
}
