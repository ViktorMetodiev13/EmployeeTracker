import './listOfEmployees.css';

import React from "react"
import { useNavigate } from 'react-router-dom';

import { EmployeeList } from '../../utils/types';


type ListOfEmployeesProps = {
    employees: EmployeeList;
    onDeleteEmployee: (id: string) => void;
}

export const ListOfEmployees: React.FC<ListOfEmployeesProps> = ({ employees, onDeleteEmployee }) => {
    const navigate = useNavigate();

    const onDeleteClick = (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete this ${name}?`)) {
            onDeleteEmployee(id);
        };
    }

    const onEditClick = (id: string) => {

        navigate(`/employees/${id}/edit`);
    };

    return (
        <div className="employees-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Role</th>
                        <th scope="col">Started Working In</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees && employees.map(e =>
                        <tr key={e._id}>
                            <td>{e._id || 0}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>{e.role}</td>
                            <td>{e.startedWorkingAt}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => onEditClick(e._id)}>Edit</button> <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(e._id, e.name)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}