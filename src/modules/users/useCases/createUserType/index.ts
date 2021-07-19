import { CreateUserTypeUseCase } from './createUserTypeUseCase';
import { UserTypeRepository } from '../../repositories/implementations/UserTypeRepository';
import { CreateUserTypeController } from './createUserTypeController';

const userTypeRepository = new UserTypeRepository();
const createUserTypeUseCase = new CreateUserTypeUseCase(userTypeRepository);
const createUserTypeController = new CreateUserTypeController(createUserTypeUseCase);

export default createUserTypeController;
