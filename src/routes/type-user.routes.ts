import { Router } from 'express';

import createTypeUserController from '../modules/users/useCases/createTypeUser';

const typeUsersRoutes = Router();

typeUsersRoutes.post('/', (request, response) => createTypeUserController.handle(request, response));

export { typeUsersRoutes };
