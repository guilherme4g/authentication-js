import { CreateUserController } from './createUserController';
import { CreateUserUseCase } from './createUserUseCase';
import { UserRepository } from '../../repositories/implementations/UserRepository';

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;
