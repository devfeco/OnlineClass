import * as Yup from 'yup'

const authValidation = Yup.object().shape({
    phoneNumber:Yup.string().min(10).max(10).required(),
});

module.exports = authValidation;