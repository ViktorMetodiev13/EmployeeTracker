import { EmployeeList, dataServerResponse, addEmployeeSchema } from "../utils/types";

const BASE_URL = 'http://localhost:3030/jsonstore/employees';

export const getAllEmployees = async (): Promise<EmployeeList> => {
    const response = await fetch(BASE_URL);
    const result: dataServerResponse = await response.json();

    const employees: EmployeeList = Object.values(result);

    return employees;
};

// ADD TYPE TO WHAT THE FUNCTION SHOULD RETURN - PROMISE<?>
// export const getOneEmployee = async (id: string) => {
//     const response = await fetch(`${BASE_URL}/${id}`);
//     // ADD TYPE FOR employee
//     const employee = await response.json();

//     return employee;
// };

export const addEmployee = async (data: addEmployeeSchema) => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
};

// export const editEmployee = async (data: employeeSheme) => {
    
// }

export const deleteEmployee = async (id: string) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
};