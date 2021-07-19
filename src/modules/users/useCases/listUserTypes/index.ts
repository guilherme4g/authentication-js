import { UserTypeRepository } from '../../repositories/implementations/UserTypeRepository';
import { ListUserTypesController } from './listUserTypesController';
import { ListTypeUsersUseCase } from './listUserTypesUseCase';

const userTypeRepository = new UserTypeRepository();
const listTypeUsersUseCase = new ListTypeUsersUseCase(userTypeRepository);
const listUserTypesController = new ListUserTypesController(listTypeUsersUseCase);

export default listUserTypesController;
