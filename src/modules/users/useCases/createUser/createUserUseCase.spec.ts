import { CreateUserUseCase } from './createUserUseCase';
import { UserRepository } from '../../repositories/fake/UserRepository';

let createUserUseCase: CreateUserUseCase;
let userRepository: UserRepository;

describe('Create Category', () => {
  beforeEach(() => {
    userRepository = new UserRepository();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  it('souble be able create  a new user', async () => {
    const user = {
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      typeUser: 'any_type',
    };

    createUserUseCase.execute(user);

    const userCreated = await userRepository.findByEmail(user.email);

    expect(userCreated).toHaveProperty('id');
    expect(userCreated?.name).toBe(user.name);
  });
});
