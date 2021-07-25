import { Router } from 'express';

import createUserTypeController from '../modules/user_types/useCases/createUserType';
import listUserTypesController from '../modules/user_types/useCases/listUserTypes';
import removeUserTypeController from '../modules/user_types/useCases/removeUserType';

const userTypeRoutes = Router();

userTypeRoutes.post('/', (request, response) => createUserTypeController.handle(request, response));
userTypeRoutes.get('/', (request, response) => listUserTypesController.handle(request, response));
userTypeRoutes.delete('/:id', (request, response) => removeUserTypeController.handle(request, response));

export { userTypeRoutes };
