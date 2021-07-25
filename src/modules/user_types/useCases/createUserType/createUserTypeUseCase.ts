import { IUserTypeRepository, ICreateUserTypeDTO } from '../../repositories/IUserTypeRepository';

class CreateUserTypeUseCase {
  constructor(private userTypeRepository: IUserTypeRepository) {}

  async execute({ name } : ICreateUserTypeDTO): Promise<void> {
    this.userTypeRepository.create({
      name,
    });
  }
}

export { CreateUserTypeUseCase };
