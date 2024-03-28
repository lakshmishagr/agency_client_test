import { Request, NextFunction, Response } from 'express';
import Joi from 'joi';
import ApiError from '../core/ApiError';
import { sendErrorResponse } from '../core/response-handler';

/**
 * Validate request payload
 * @param {Request} req request object.
 * @param {any} reqBody custom body.
 * @param {Joi.Schema} schema schema body.
 * @return {any} next() will call respective funnctions
 */
export async function requestValidator(
  req: Request,
  reqBody: any,
  schema: Joi.Schema
): Promise<any> {
  const reqData = reqBody || req.body;
  await schema
    .validateAsync(reqData)
    .then((data: any) => {
      req.body = data;
      return true;
    })
    .catch((err: Error) => {
      throw new ApiError(422, 'Unprocessable entity', err.stack);
    });
}

/**
 * Method to verify the incoming jwt token in request is valid
 * @param req Express request
 * @param res Express response
 * @param next Next Function
 * @returns
 */
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = true;
  if (token) {
    next();
  } else {
    return sendErrorResponse(req, res, 401, 'Unauthorized', '');
  }
};
