import './addEmployee.css';

import React from "react";
import { useFormik } from 'formik';

import { addEmployeeSchema } from "../../utils/types";
import { getStartingEmployeeDate } from '../../utils/getStartingEmployeeDate';
import { addEditForm } from '../../schemas/addEditForm';


type AddEmployeeProps = {
    onAddEmployee: (addEmployeeSchema: addEmployeeSchema) => void;
}

export const AddEmployee: React.FC<AddEmployeeProps> = ({ onAddEmployee }) => {
    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            role: '',
        },
        validationSchema: addEditForm,
        onSubmit: () => {
            const updatedValues = {
                ...values,
                startedWorkingAt: getStartingEmployeeDate()
            }

            onAddEmployee(updatedValues);
        }
    });

    return (
        <div className='add-employee'>
            <h2 className='employee-form-heading'>Add Employee</h2>
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