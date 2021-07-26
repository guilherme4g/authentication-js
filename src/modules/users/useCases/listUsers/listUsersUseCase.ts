import { User } from '../../entities/user';
import { IUserRepository } from '../../repositories/IUserRepository';

class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.list();
  }
}

export { ListUsersUseCase };
