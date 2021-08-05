import { AuthenticateUserController } from './authenticateUserController';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';
import { UserRepository } from '../../repositories/typeorm/UserRepository';

const userRepository = new UserRepository();
const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export default authenticateUserController;
