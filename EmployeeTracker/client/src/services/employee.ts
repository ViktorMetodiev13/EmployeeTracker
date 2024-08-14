import { EmployeeList, dataServerResponse } from "../utils/types";

const BASE_URL = 'http://localhost:3030/jsonstore/employees';

export const getAllEmployees = async (): Promise<EmployeeList> => {
    const response = await fetch(BASE_URL);
    const data: dataServerResponse = await response.json();

    const employees: EmployeeList = Object.values(data);

    return employees;
}

// export const addEmployee = async (data: employeeSheme) => {
    
// }

// export const editEmployee = async (data: employeeSheme) => {
    
// }

// export const deleteEmployee = async (id: number) => {

// }