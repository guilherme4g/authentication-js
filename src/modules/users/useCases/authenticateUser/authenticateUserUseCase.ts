import { compareSync } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({
    email,
    password,
  } : IRequest): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError('Email or password incorrect!');

    if (!compareSync(password, user.password)) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign({}, 'd6ba0db4153beff2da013dea983a44dbd87857d0', {
      subject: user.id,
      expiresIn: '15m',
    });

    return token;
  }
}

export { AuthenticateUserUseCase };
