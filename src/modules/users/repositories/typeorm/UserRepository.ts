import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/user';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find({});
    return users;
  }

  async findById(id: string): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ email });
    return user;
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

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
