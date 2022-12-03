import * as Yup from 'yup'

const accountValidation = Yup.object().shape({
    fullname:Yup.string().min(5).max(30).required(),
    grade:Yup.string().required(),
});

module.exports = accountValidation;