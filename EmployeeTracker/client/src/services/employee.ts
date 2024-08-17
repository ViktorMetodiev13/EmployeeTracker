import { EmployeeList, dataServerResponse, addEmployeeSchema, fullEmployeeData } from "../utils/types";

const BASE_URL = 'http://localhost:3030/jsonstore/employees';

export const getAllEmployees = async (): Promise<EmployeeList> => {
    const response = await fetch(BASE_URL);
    const result: dataServerResponse = await response.json();

    const employees: EmployeeList = Object.values(result);

    return employees;
};

export const getOneEmployee = async (id: string | undefined) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    const employee: fullEmployeeData = await response.json();

    return employee;
};

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

export const editEmployee = async (employeeData: fullEmployeeData): Promise<fullEmployeeData> => {
    const response = await fetch(`${BASE_URL}/${employeeData._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(employeeData)
    });

    const result = await response.json();

    return result;
}

export const deleteEmployee = async (id: string) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });
};