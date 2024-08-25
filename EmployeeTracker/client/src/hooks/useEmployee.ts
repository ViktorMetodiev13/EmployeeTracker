import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addEmployeeSchema, EmployeeList, fullEmployeeData } from "../utils/types";
import { addEmployee, deleteEmployee, editEmployee, getAllEmployees } from "../services/employee";
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeToState, deleteEmployeeFromState, editEmployeeInState, setAllEmployeesToState } from "../redux/employeeSlice";
import { RootState } from "../redux/store";

export const useEmployee = () => {
    const employees = useSelector((state: RootState) => state.employee); // Assuming `employee` is the state slice name
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees()
            .then(result => {
                dispatch(setAllEmployeesToState(result));
            })
            .catch(error => {
                console.error('Failed to fetch employees:', error);
            });
    }, [dispatch]);

    const onAddEmployee = async (employeeData: addEmployeeSchema) => {
        try {
            const newEmployee: fullEmployeeData = await addEmployee(employeeData);
            
            dispatch(addEmployeeToState(newEmployee));

            navigate('/employees');
        } catch (error) {
            console.log('There was an error adding the employee.');
        }
    };

    const onEditEmployee = async (employeeData: fullEmployeeData) => {
        try {
            const updatedEmployeeData = await editEmployee(employeeData);

            dispatch(editEmployeeInState(updatedEmployeeData));

            navigate('/employees');
        } catch (error) {
            console.error("There was an error editing the employee:", error);
        }
    };

    const onDeleteEmployee = async (id: string) => {
        try {
            await deleteEmployee(id);
            
            dispatch(deleteEmployeeFromState(id));
        } catch (error) {
            console.error('There was an error deleting the employee:', error);
        }
    };

    return {
        employees,
        onAddEmployee,
        onEditEmployee,
        onDeleteEmployee,
    };
}