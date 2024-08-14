import { EmployeeList, dataServerResponse } from "../utils/types";

const BASE_URL = 'http://localhost:3030/jsonstore/employees';

export const getAllEmployees = async (): Promise<EmployeeList> => {
    const response = await fetch(BASE_URL);
    const data: dataServerResponse = await response.json();

    const employees: EmployeeList = Object.values(data);

    return employees;
};

// ADD TYPE TO WHAT THE FUNCTION SHOULD RETURN - PROMISE<?>
// export const getOneEmployee = async (id: string) => {
//     const response = await fetch(`${BASE_URL}/${id}`);
//     // ADD TYPE FOR employee
//     const employee = await response.json();

//     return employee;
// };

// export const addEmployee = async (data: employeeSheme) => {
    
// }

// export const editEmployee = async (data: employeeSheme) => {
    
// }

export const deleteEmployee = async (id: string) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
};