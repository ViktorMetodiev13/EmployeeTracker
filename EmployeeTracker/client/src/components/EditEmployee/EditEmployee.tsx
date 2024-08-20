import './editEmployee.css';

import React, { useEffect, useState } from "react"

import { useFormik } from "formik";

import { fullEmployeeData } from '../../utils/types';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneEmployee } from '../../services/employee';
import { addEditForm } from '../../schemas/addEditForm';


type EditEmployeeProps = {
    onEditEmployee: (employeeData: fullEmployeeData) => void;
}

export const EditEmployee: React.FC<EditEmployeeProps> = ({ onEditEmployee }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState<fullEmployeeData>({
        name: '',
        email: '',
        phone: '',
        role: '',
        _id: '',
        startedWorkingAt: ''
    });

    useEffect(() => {
        getOneEmployee(id)
            .then(result => {
                setEmployee(result);
            })
    }, [id]);

    const { handleSubmit, handleChange, values, touched, errors, handleBlur } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: employee?.name || '',
            email: employee?.email || '',
            phone: employee?.phone || '',
            role: employee?.role || '',
        },
        validationSchema: addEditForm,
        onSubmit: () => {
            const updatedValues = {
                ...employee,
                ...values,
            };

            onEditEmployee(updatedValues);
        }
    });

    return (
        <div className="edit-employee">
            <h2 className='employee-form-heading'>Edit Employee</h2>
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
                        defaultValue={employee.email}
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
                        defaultValue={employee.phone}
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
                <button type="submit" className="btn btn-primary">Save</button> <button type="button" className="btn btn-danger" onClick={() => {navigate('/employees');}}>Cancel</button>
            </form>
        </div>
    )
}