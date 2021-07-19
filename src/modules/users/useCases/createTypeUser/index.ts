import { CreateTypeUserUseCase } from './createTypeUserUseCase';
import { TypeUserRepository } from '../../repositories/implementations/TypeUserRepository';
import { CreateTypeUserController } from './createTypeUserController';

const typeUserRepository = new TypeUserRepository();
const createTypeUserUseCase = new CreateTypeUserUseCase(typeUserRepository);
const createTypeUserController = new CreateTypeUserController(createTypeUserUseCase);

export default createTypeUserController;
