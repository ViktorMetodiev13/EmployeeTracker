import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addEmployeeSchema, EmployeeList, fullEmployeeData } from "../utils/types";
import { addEmployee, deleteEmployee, editEmployee, getAllEmployees } from "../services/employee";

export const useEmployee = () => {
    const [employees, setEmployees] = useState<EmployeeList>([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees()
            .then(result => {
                setEmployees(result);
            })
    }, []);

    const onAddEmployee = async (employeeData: addEmployeeSchema) => {
        try {
            const newEmployee = await addEmployee(employeeData);
            
            setEmployees(state => ([...state, newEmployee]));
        } catch (error) {
            console.log('There was an error adding the employee.');
        }

        navigate('/employees');
    };

    const onEditEmployee = async (employeeData: fullEmployeeData) => {        
        try {
            const newEmployeeData = await editEmployee(employeeData);

            setEmployees(state => state.map(employee => employee._id === employeeData._id ? newEmployeeData : employee));

            navigate('/employees');
        } catch (error) {
            console.log("There is an error regarding the edit course request.");
        }
    };

    const onDeleteEmployee = async (id: string) => {
        try {
            await deleteEmployee(id);

            setEmployees(state => state.filter(employee => employee._id !== id));
        } catch (error) {
            console.log('error regarding the deletion of an employee. ' + error);
        }
    };

    return { employees, onAddEmployee, onEditEmployee, onDeleteEmployee };
}