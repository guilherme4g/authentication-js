import { UserTypeRepository } from '../../repositories/implementations/UserTypeRepository';

export class RemoveUserTypeUseCase {
  constructor(private userTypeRepository: UserTypeRepository) {}

  async execute(id: string): Promise<void> {
    await this.userTypeRepository.remove(id);
  }
}
