import { Router } from 'express';

import createUserController from '../modules/users/useCases/createUser';

const userRoutes = Router();

userRoutes.post('/', (request, response) => createUserController.handle(request, response));

export { userRoutes };
