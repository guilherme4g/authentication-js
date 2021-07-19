import { Router } from 'express';

import createUserTypeController from '../modules/users/useCases/createUserType';
import listUserTypesController from '../modules/users/useCases/listUserTypes';

const userTypeRoutes = Router();

userTypeRoutes.post('/', (request, response) => createUserTypeController.handle(request, response));
userTypeRoutes.get('/', (request, response) => listUserTypesController.handle(request, response));

export { userTypeRoutes };
