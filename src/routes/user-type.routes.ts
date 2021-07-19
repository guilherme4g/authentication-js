import { Router } from 'express';

import createUserTypeController from '../modules/users/useCases/createUserType';

const userTypeRoutes = Router();

userTypeRoutes.post('/', (request, response) => createUserTypeController.handle(request, response));

export { userTypeRoutes };
