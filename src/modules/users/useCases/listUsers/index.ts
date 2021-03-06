import { UserRepository } from '../../repositories/typeorm/UserRepository';
import { ListUserController } from './listUsersController';
import { ListUsersUseCase } from './listUsersUseCase';

const userRepository = new UserRepository();
const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUserController = new ListUserController(listUsersUseCase);

export default listUserController;
