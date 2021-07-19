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

  async create({ name }: ICreateUserTypeDTO): Promise<UserType> {
    const userType = this.repository.create({ name });
    await this.repository.save(userType);
    return userType;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
