import joi from 'joi';
import { createAgency } from './agency.requestschema';

export const createClient = joi
  .object({
    agencyId: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().required(),
    totalBill: joi.number().strict().required()
  })
  .options({
    stripUnknown: true,
    abortEarly: true
  });

export const createAgencyClient = joi
  .object({
    agency: createAgency,
    clients: joi.array().items({
      agencyId: joi.string().optional().allow(null, ''),
      name: joi.string().required(),
      email: joi.string().email().required(),
      phoneNumber: joi.string().required(),
      totalBill: joi.number().strict().required()
    })
  })

  .options({
    stripUnknown: true,
    abortEarly: true
  });
