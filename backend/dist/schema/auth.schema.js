"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const Joi = require("joi");
exports.loginSchema = Joi.object({
    phone_number: Joi.string()
        .length(11)
        .pattern(/^[0-9]+$/)
        .required(),
    password: Joi.string().required(),
}).options({ abortEarly: true });
exports.registerSchema = Joi.object({
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
//# sourceMappingURL=auth.schema.js.map