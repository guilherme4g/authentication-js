import { User } from '../../entities/user';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private users : User[];

  constructor() {
    this.users = [];
  }

  async list(): Promise<User[]> {
    return this.users;
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id === id);
  }

  async create({
    name, email, password, typeUser,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, {
      name, email, password, typeUser,
    });

    this.users.push(user);

    return user;
  }

  async remove(id: string): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex >= 0) this.users.splice(userIndex, 1);
  }
}
