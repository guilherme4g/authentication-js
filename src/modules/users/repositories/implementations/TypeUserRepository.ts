import { getRepository, Repository } from 'typeorm';
import { TypeUser } from '../../entities/typeUsers';
import { ICreateTypeUserDTO, ITypeUsersRepository } from '../ITypeUsersRepository';

export class TypeUserRepository implements ITypeUsersRepository {
  private repository: Repository<TypeUser>;

  constructor() {
    this.repository = getRepository(TypeUser);
  }

  list(): Promise<TypeUser[]> {
    throw new Error('Method not implemented.');
  }

  // TODO implements method
  // eslint-disable-next-line no-unused-vars
  async create({ name }: ICreateTypeUserDTO): Promise<TypeUser> {
    const typeUser = this.repository.create({ name });
    await this.repository.save(typeUser);
    return typeUser;
  }

  // TODO implements method
  // eslint-disable-next-line no-unused-vars
  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
