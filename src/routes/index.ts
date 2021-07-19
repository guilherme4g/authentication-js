import { Router } from 'express';

import { typeUsersRoutes } from './type-user.routes';

const router = Router();

router.use('/typeuser', typeUsersRoutes);

export { router };
