import { RemoveUserUseCase } from './removeUserUseCase';
import { RemoveUserController } from './removeUserController';
import { UserRepository } from '../../repositories/typeorm/UserRepository';

const userRepository = new UserRepository();
const removeUserUseCase = new RemoveUserUseCase(userRepository);
const removeUserController = new RemoveUserController(removeUserUseCase);

export default removeUserController;
