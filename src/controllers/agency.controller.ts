import { Request, Response } from 'express';
import {
  sendErrorResponse,
  sendSuccessResponse
} from '../core/response-handler';
import { AgencySchema, CreateAgencyDto } from '../interfaces/agency.interface';
import { requestValidator } from '../middleware/auth';
import * as rules from '../request-schemas/agency.requestschema';
import * as agencyService from '../services/agency.services';

class AgencyController {
  public getAgency = async (req: Request, res: Response): Promise<void> => {
    try {
      const findAllAgencysData: AgencySchema[] =
        await agencyService.findAllAgency();

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agencys list fetched successfully.',
        data: findAllAgencysData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public getAgencyById = async (req: Request, res: Response): Promise<void> => {
    try {
      const agencyId: string = req.params.id;
      const findOneAgencyData: AgencySchema =
        await agencyService.findAgencyById(agencyId);

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agency fetched successfully.',
        data: findOneAgencyData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public createAgency = async (req: Request, res: Response): Promise<void> => {
    try {
      //valid request body
      await requestValidator(req, null, rules.createAgency);

      const agencyData: CreateAgencyDto = req.body;
      const createAgencyData: AgencySchema = await agencyService.createAgency(
        agencyData
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agency created successfully.',
        data: createAgencyData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public updateAgency = async (req: Request, res: Response): Promise<void> => {
    try {
      //valid request body
      await requestValidator(req, null, rules.createAgency);

      const agencyId: string = req.params.id;
      const agencyData: CreateAgencyDto = req.body;

      const updateAgencyData: AgencySchema = await agencyService.updateAgency(
        agencyId,
        agencyData
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agency updated successfully.',
        data: updateAgencyData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };

  public deleteAgency = async (req: Request, res: Response): Promise<void> => {
    try {
      const agencyId: string = req.params.id;
      const deleteAgencyData: AgencySchema = await agencyService.deleteAgency(
        agencyId
      );

      return sendSuccessResponse(req, res, {
        success: true,
        error: null,
        message: 'Agency delete successfully.',
        data: deleteAgencyData
      });
    } catch (err: any) {
      return sendErrorResponse(req, res, 500, err.message, err);
    }
  };
}

export default AgencyController;
