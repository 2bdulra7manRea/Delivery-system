import * as Joi from 'joi';

export const loginSchema = Joi.object({
  phone_number: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),

  password: Joi.string().required(),
}).options({ abortEarly: true });

export const registerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  location_address: Joi.string().required(),
  phone_number: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
  password: Joi.string().required(),
  identity_card_number: Joi.string().length(19).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  userType: Joi.string().valid('agent', 'customer', 'manager'),
});
