import { hashSync } from 'bcrypt';
import { AppError } from '../../../../errors/AppError';
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

    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User Already Exists');

    this.userRepository.create({
      name,
      email,
      password: passwordHash,
      typeUser,
    });
  }
}

export { CreateUserUseCase };
