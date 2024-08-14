import { EmployeeList } from '../../utils/types';
import './listOfEmployees.css';

import React from "react"

type ListOfEmployees = {
    employees: EmployeeList;
    onDeleteEmployee: (id: string) => void;
}

export const ListOfEmployees: React.FC<ListOfEmployees> = ({ employees, onDeleteEmployee }) => {
    const onDeleteClick = (id: string) => {
        // FIX ALERT TO WORK PROPERLY
        window.alert('Are you sure you want to delete this employee?');

        onDeleteEmployee(id);
    }

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
                            <button type="button" className="btn btn-primary">Edit</button> <button type="button" className="btn btn-danger" onClick={() => onDeleteClick(e._id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}