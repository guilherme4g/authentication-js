import { hashSync } from 'bcrypt';
import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    name,
    email,
    password,
    typeUser,
  } : ICreateUserDTO): Promise<void> {
    const passwordHash = hashSync(password, 8);

    this.userRepository.create({
      name,
      email,
      password: passwordHash,
      typeUser,
    });
  }
}

export { CreateUserUseCase };
