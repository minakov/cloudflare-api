import { Router } from 'itty-router';
import create from './create';
import status from './status';

// and a child router (with FULL base path defined, from root)
const router = Router({ base: '/asset' });

router
  .get('/:id', status)
  .post('/', create);

export default router;

