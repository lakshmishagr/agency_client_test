import { Request, Response } from 'express';
import {
  sendErrorResponse,
  sendSuccessResponse
} from '../core/response-handler';
import {
  ClientSchema,
  CreateClientDto,
  CreateAgencyClientDto
} from '../interfaces/client.interface';
import { requestValidator } from '../middleware/auth';
import * as rules from '../request-schemas/client.requestschema';
import * as clientService from '../services/client.services';

class ClientsController {
  public getClients = async (req: Request, res: Response): Promise<void> => {
    try {
      const findAllClientsData: ClientSchema[] =
        await clientService.findAllClient();

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Clients list fetched successfully.',
        data: findAllClientsData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public getClientById = async (req: Request, res: Response): Promise<void> => {
    try {
      const clientId: string = req.params.id;
      const findOneClientData: ClientSchema =
        await clientService.findClientById(clientId);

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Client fetched successfully.',
        data: findOneClientData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public createClient = async (req: Request, res: Response): Promise<void> => {
    try {
      //valid request body
      await requestValidator(req, null, rules.createClient);

      const clientData: CreateClientDto = req.body;
      const createClientData: ClientSchema = await clientService.createClient(
        clientData
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Client created successfully.',
        data: createClientData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public updateClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const clientId: string = req.params.id;
      const clientData: CreateClientDto = req.body;

      //valid request body
      await requestValidator(req, null, rules.createClient);

      const updateClientData: ClientSchema = await clientService.updateClient(
        clientId,
        clientData
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Client updated successfully.',
        data: updateClientData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public deleteClient = async (req: Request, res: Response): Promise<void> => {
    try {
      const clientId: string = req.params.id;
      const deleteClientData: ClientSchema = await clientService.deleteClient(
        clientId
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Client delete successfully.',
        data: deleteClientData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public getHightBillClient = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const data: ClientSchema = await clientService.getHightBillClient();

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Details fetched successfully.',
        data: data
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public createAgencyClient = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      console.log(req.body);

      //valid request body
      await requestValidator(req, null, rules.createAgencyClient);

      const bodydata: CreateAgencyClientDto = req.body;
      console.log(bodydata);

      const data: ClientSchema = await clientService.createAgencyClient(
        bodydata
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agency & Client created successfully.',
        data: data
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };
}

export default ClientsController;
