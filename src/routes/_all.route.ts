import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import IndexController from '../controllers/index.controller';
import LoggerRoute from './logger.route';
import AgencyRoute from './agency.route';
import ClientsRoute from './client.route';

class V1AllRouter implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //welcome api
    this.router.get(`${this.path}`, this.indexController.index);
    this.router.get(`${this.path}error`, this.indexController.error);

    //models apis
    this.router.use(`${this.path}`, new LoggerRoute().router);
    this.router.use(`${this.path}`, new AgencyRoute().router);
    this.router.use(`${this.path}`, new ClientsRoute().router);
  }
}

export { V1AllRouter };
