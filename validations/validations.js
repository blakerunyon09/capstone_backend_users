// VALIDATIONS
const Joi = require('@hapi/joi')

// REGISTRATION VALIDATION
const registerValidation = (newUser) => {
  const schema = Joi.object({
    username: Joi
      .string()
      .max(30)
      .required(),
    email: Joi
      .string()
      .email()
      .min(7)
      .required(),
    password: Joi
      .string()
      .min(6)
      .required(),
    organization: Joi
      .string()
      .required()
  })
  // VALIDATE BEFORE USER IS MADE
  return schema.validate(newUser)
}

// LOGIN VALIDATION
const loginValidation = (user) => {
  const schema = Joi.object({
    email: Joi
      .string()
      .email()
      .min(7)
      .required(),
    password: Joi
      .string()
      .min(6)
      .required(),
  })
  // VALIDATE BEFORE USER IS MADE
  return schema.validate(user)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;