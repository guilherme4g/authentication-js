import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/user';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  list(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  async create({
    name,
    email,
    password,
    typeUser,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      password,
      typeUser_id: typeUser,
    });
    await this.repository.save(user);
    return user;
  }

  remove(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
