const Joi = require("joi")

module.exports= {
    addStore: Joi.object().keys({
        address: Joi.string().min(3).max(30).required().messages({
            "string.required":"address is required"
        }),
        name: Joi.string().min(3).max(30).required().messages({
            "string.required":"name is required",
            "string.name":"Invalid name"
        }),
        phone: Joi.string().regex(/^01\d{9}$/).required().messages({
            "string.required":"phone is required"
        }),
    }),

}