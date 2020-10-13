import { Router } from 'express';
import orphanagesController from './controllers/orphanagesController';

const routes = Router();


routes.get('/', async (req, res)=>{
  return res.json({ status: 'online' });
});

routes.post('/orphanages', orphanagesController.create);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;