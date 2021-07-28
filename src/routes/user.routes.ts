import { Router } from 'express';

import createUserController from '../modules/users/useCases/createUser';
import listUsersController from '../modules/users/useCases/listUsers';
import removeUserController from '../modules/users/useCases/removeUser';

const userRoutes = Router();

userRoutes.post('/', (request, response) => createUserController.handle(request, response));
userRoutes.get('/', (request, response) => listUsersController.handle(request, response));
userRoutes.delete('/:id', (request, response) => removeUserController.handle(request, response));

export { userRoutes };
