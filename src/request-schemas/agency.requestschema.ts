import joi from 'joi';

export const createAgency = joi
  .object({
    name: joi.string().required(),
    address1: joi.string().required(),
    address2: joi.string().allow(null, '').default(''),
    state: joi.string().allow(null, '').default(''),
    city: joi.string().allow(null, '').default(''),
    phoneNumber: joi.string().allow(null, '').default('')
  })
  .options({
    stripUnknown: true,
    abortEarly: true
  });
