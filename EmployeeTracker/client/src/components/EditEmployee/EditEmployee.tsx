import React from "react"

import { useFormik } from "formik";
import * as Yup from 'yup';
import { getStartingEmployeeDate } from "../../utils/getStartingEmployeeDate";


type EditEmployeeProps = {
    onEditEmployee: () => void;
}

export const EditEmployee: React.FC<EditEmployeeProps> = ({ onEditEmployee }) => {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            role: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'The maximum characters for name are 50')
                .min(2, 'Name used be minimum 3 characters')
                .matches(/^[A-Za-z]+ [A-Za-z]+$/, 'Please Enter first and last name')
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
        }),
        onSubmit: () => {
            const updatedValues = {
                ...values,
                startedWorkingAt: getStartingEmployeeDate()
            }

            onEditEmployee(updatedValues);
        }
    });

    return (
        <div className="edit-employee">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur}
                    />
                    {touched.name && errors.name ? (
                        <div className='form-errors'>{errors.name}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? (
                        <div className='form-errors'>{errors.email}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        aria-describedby="emailHelp"
                        onChange={handleChange}
                        value={values.phone}
                        onBlur={handleBlur}
                    />
                    {touched.phone && errors.phone ? (
                        <div className='form-errors'>{errors.phone}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role</label>
                    <select
                        className="form-select"
                        id='role'
                        onChange={handleChange}
                        value={values.role}
                        onBlur={handleBlur}
                    >
                        <option>Select an option</option>
                        <option>CEO/CTO</option>
                        <option>Team Lead</option>
                        <option>Senior</option>
                        <option>Mid</option>
                        <option>Junior</option>
                        <option>Intern</option>
                        <option>Contract</option>
                    </select>
                    {touched.role && errors.role ? (
                        <div className='form-errors'>{errors.role}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}