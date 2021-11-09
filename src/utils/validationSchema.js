import * as yup from 'yup';

export const signupSchema = yup.object({
    user: yup.object({
        username: yup.string().required('This is Required Field'),
        password: yup.string().required('This is Required Field')
    }),
    first_name: yup.string().required('This is Required Field'),
    last_name: yup.string().required('This is Required Field'),
    phone: yup.string().required('This is Required Field'),
    user_type: yup.string().required('This is Required Field')
});

export const signinSchema = yup.object({
    username: yup.string().required('This is Required Field'),
    password: yup.string().required('This is Required Field'),
});