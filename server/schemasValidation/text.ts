import * as Joi from 'joi';

export const TextSchema = Joi.object({
  text: Joi.string().required(),
});
