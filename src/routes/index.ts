import { Router } from 'express';

import { userTypeRoutes } from './user-type.routes';
import { userRoutes } from './user.routes';

const router = Router();

router.use('/usertype', userTypeRoutes);
router.use('/user', userRoutes);

export { router };
