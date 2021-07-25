import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
    typeUser,
  } : ICreateUserDTO): Promise<void> {
    this.userRepository.create({
      name,
      email,
      password,
      typeUser,
    });
  }
}

export { CreateUserUseCase };
