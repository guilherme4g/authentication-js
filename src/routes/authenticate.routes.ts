import { Router } from 'express';

import authenticateUserController from '../modules/users/useCases/authenticateUser';

const authenticateRoutes = Router();

authenticateRoutes.post('/session', (request, response) => authenticateUserController.handle(request, response));

export { authenticateRoutes };
