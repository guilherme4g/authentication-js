import { Router } from 'express';

import { userTypeRoutes } from './user-type.routes';

const router = Router();

router.use('/usertype', userTypeRoutes);

export { router };
