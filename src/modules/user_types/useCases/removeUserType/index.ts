import { UserTypeRepository } from '../../repositories/implementations/UserTypeRepository';
import { RemoveUserTypeUseCase } from './removeUserTypeUseCase';
import { RemoveUserTypeController } from './removeUserTypeController';

const userTypeRepository = new UserTypeRepository();
const removeUserTypeUseCase = new RemoveUserTypeUseCase(userTypeRepository);
const removeUserTypeController = new RemoveUserTypeController(removeUserTypeUseCase);

export default removeUserTypeController;
