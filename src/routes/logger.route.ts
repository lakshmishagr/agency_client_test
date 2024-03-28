import { Router } from 'express';
import LoggerController from '../controllers/logger.controller';
import { Routes } from '../interfaces/routes.interface';

class LoggerRoute implements Routes {
  public path = '/';
  public router = Router();
  public loggerController = new LoggerController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //get recent logs
    this.router.get(
      `/logger/getRecentLogs`,
      this.loggerController.getRecentLogs
    );
  }
}

export default LoggerRoute;
