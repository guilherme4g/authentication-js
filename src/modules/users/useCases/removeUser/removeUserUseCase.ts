import { IUserRepository } from '../../repositories/IUserRepository';

class RemoveUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    return this.userRepository.remove(id);
  }
}

export { RemoveUserUseCase };
