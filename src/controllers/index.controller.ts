import { Request, Response } from 'express';
import {
  sendSuccessResponse,
  sendErrorResponse
} from '../core/response-handler';
import Logger from '../core/logger';
import ApiError from '../core/ApiError';

class IndexController {
  public index = (req: Request, res: Response) => {
    try {
      Logger.info('OK');
      return sendSuccessResponse(req, res, 'Welcome to V1 Apis');
    } catch (error) {
      return sendErrorResponse(req, res, 500, 'Something went wrong', error);
    }
  };

  public error = (req: Request, res: Response) => {
    try {
      throw new ApiError(400, 'Error thrown successful V1', new Error());
    } catch (error) {
      return sendErrorResponse(req, res, 500, 'Something went wrong', error);
    }
  };
}

export default IndexController;
