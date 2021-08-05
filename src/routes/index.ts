import { Router } from 'express';

import { userTypeRoutes } from './user-type.routes';
import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use('/usertype', userTypeRoutes);
router.use('/user', userRoutes);
router.use(authenticateRoutes);

export { router };
