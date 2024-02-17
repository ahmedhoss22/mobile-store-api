const Joi = require("joi");

module.exports = {
  addAboutSchema: Joi.object().keys({
    title: Joi.string().required().trim().messages({
      "string.required": "title is required",
    }),
    title_ar: Joi.string().required().trim().messages({
      "string.required": "title_ar is required",
    }),
    job: Joi.string().required().trim().messages({
      "string.required": "job is required",
    }),
    job_ar: Joi.string().required().trim().messages({
      "string.required": "job_ar is required",
    }),
    job_link: Joi.string().trim(),
    company: Joi.string().trim(),
    company_ar: Joi.string().trim(),
    company_link: Joi.string().trim(),
    intro: Joi.string().required().trim().messages({
      "string.required": "intro is required",
    }),
    intro_ar: Joi.string().required().trim().messages({
      "string.required": "intro_ar is required",
    }),
    image: Joi.string().trim(),
  }),
  // You can add more validation schemas for other CRUD operations as needed
};
