import { UserType } from '../../entities/userType';
import { UserTypeRepository } from '../../repositories/implementations/UserTypeRepository';

export class ListTypeUsersUseCase {
  constructor(private userTypeRepository: UserTypeRepository) {}

  async execute(): Promise<UserType[]> {
    const usersType = await this.userTypeRepository.list();
    return usersType;
  }
}
