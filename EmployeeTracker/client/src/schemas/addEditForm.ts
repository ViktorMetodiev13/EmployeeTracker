import * as Yup from 'yup';

const validateName = /^[A-Za-z]+ [A-Za-z]+$/;

export const addEditForm = Yup.object().shape({
    name: Yup.string()
        .max(50, 'The maximum characters for name are 50')
        .min(2, 'Name used be minimum 3 characters')
        .matches(validateName, 'Please Enter first and last name')
        .required('A name is required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('An email is required'),
    phone: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8, 'Phone should be minimum 8 numbers')
        .required('A phone number is required'),
    role: Yup.string()
        .required('Required'),
})