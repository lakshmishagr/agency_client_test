import { Router } from 'express';
import AgencyController from '../controllers/agency.controller';
import { Routes } from '../interfaces/routes.interface';
import { verifyToken } from '../middleware/auth';

class AgencyRoute implements Routes {
  public path = '/agency';
  public router = Router();
  public agencyController = new AgencyController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      verifyToken,
      this.agencyController.getAgency
    );
    this.router.get(
      `${this.path}/:id`,
      verifyToken,
      this.agencyController.getAgencyById
    );
    this.router.post(
      `${this.path}`,
      verifyToken,
      this.agencyController.createAgency
    );
    this.router.put(
      `${this.path}/:id`,
      verifyToken,
      this.agencyController.updateAgency
    );
    this.router.delete(
      `${this.path}/:id`,
      verifyToken,
      this.agencyController.deleteAgency
    );
  }
}

export default AgencyRoute;
