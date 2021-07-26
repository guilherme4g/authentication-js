import { Router } from 'express';

import createUserController from '../modules/users/useCases/createUser';
import listUsersController from '../modules/users/useCases/listUsers';

const userRoutes = Router();

userRoutes.post('/', (request, response) => createUserController.handle(request, response));
userRoutes.get('/', (request, response) => listUsersController.handle(request, response));

export { userRoutes };
