import { getRepository, Repository } from 'typeorm';
import { UserType } from '../../entities/userType';
import { ICreateUserTypeDTO, IUserTypeRepository } from '../IUserTypeRepository';

export class UserTypeRepository implements IUserTypeRepository {
  private repository: Repository<UserType>;

  constructor() {
    this.repository = getRepository(UserType);
  }

  async list(): Promise<UserType[]> {
    const userTypes = await this.repository.find({ });
    return userTypes;
  }

  // TODO implements method
  // eslint-disable-next-line no-unused-vars
  async create({ name }: ICreateUserTypeDTO): Promise<UserType> {
    const userType = this.repository.create({ name });
    await this.repository.save(userType);
    return userType;
  }

  // TODO implements method
  // eslint-disable-next-line no-unused-vars
  remove(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
