import { Router } from 'itty-router';
import cors from './routes/cors';
import asset from './routes/asset';

const router = Router();

router
  .options('*', cors)
  .all('/asset/*', asset.handle)
  .get('*', () => new Response('Not found', { status: 404 }));

addEventListener('fetch', (event) => {
  event.respondWith(router.handle(event.request, event).catch(error =>
    new Response(error.message ?? 'Server Error', { status: error.status ?? 500 })
  ));
});
