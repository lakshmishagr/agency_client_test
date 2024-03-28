import { Router } from 'express';
import ClientsController from '../controllers/client.controller';
import { Routes } from '../interfaces/routes.interface';
import { verifyToken } from '../middleware/auth';

class ClientsRoute implements Routes {
  public path = '/client';
  public router = Router();
  public ClientsController = new ClientsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      `${this.path}`,
      verifyToken,
      this.ClientsController.getClients
    );
    this.router.get(
      `${this.path}/:id`,
      verifyToken,
      this.ClientsController.getClientById
    );
    this.router.post(
      `${this.path}`,
      verifyToken,
      this.ClientsController.createClient
    );
    this.router.put(
      `${this.path}/:id`,
      verifyToken,
      this.ClientsController.updateClient
    );
    this.router.delete(
      `${this.path}/:id`,
      verifyToken,
      this.ClientsController.deleteClient
    );

    //fetch highest client details
    this.router.get(
      `${this.path}/fetch/getHightBillClient`,
      this.ClientsController.getHightBillClient
    );

    //create Agency and Client
    this.router.post(
      `${this.path}/createAgencyClient`,
      verifyToken,
      this.ClientsController.createAgencyClient
    );
  }
}

export default ClientsRoute;
