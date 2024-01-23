const Joi = require("joi")
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

module.exports= {
    registerationSchema: Joi.object().keys({
        name: Joi.string().min(3).max(30).required().messages({
            "string.required":"Name is required"
        }),
        email: Joi.string().email().min(3).max(30).required().messages({
            "string.required":"email is required",
            "string.email":"Invalid Email"
        }),
        password: Joi.string().regex(passwordExp).required().messages({
            "string.required":"password is required"
        }),
        address: Joi.string().min(3).max(30).required().messages({
            "string.address":"address is required"
        }),
        nationalId: Joi.number().integer().min(10000000000000).max(99999999999999).required().messages({
            "number.required":"nationalId is required",
            "number.min":"National ID must be equal 14 digit",
            "number.max":"National ID must be equal 14 digit",
        }),
        phone: Joi.string().regex(/^01\d{9}$/).required().messages({
            "string.required":"phone is required"
        }),
        store: Joi.string().required().messages({
            "string.required":"store is required"
        }),
    }),
    loginSchema:Joi.object().keys({
        email: Joi.string().email().min(3).max(30).required().messages({
            "string.required":"email is required",
            "string.email":"Invalid Email"
        }),
        password: Joi.string().required().messages({
            "string.required":"password is required"
        }),
    })
}