import { ITypeUsersRepository, ICreateTypeUserDTO } from '../../repositories/ITypeUsersRepository';

class CreateTypeUserUseCase {
  constructor(private typeUsersRepository: ITypeUsersRepository) {}

  async execute({ name } : ICreateTypeUserDTO): Promise<void> {
    this.typeUsersRepository.create({
      name,
    });
  }
}

export { CreateTypeUserUseCase };
