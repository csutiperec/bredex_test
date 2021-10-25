const Joi = require('joi');
const teamSchema = Joi.object(
{
        name: Joi.string().min(3).required(),
        founded: Joi.number().min(1900).required(),
        win_nr: Joi.number().min(0).required(),
        paid: Joi.boolean().required()
});
module.exports = teamSchema;