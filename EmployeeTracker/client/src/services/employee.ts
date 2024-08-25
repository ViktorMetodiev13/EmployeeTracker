import { EmployeeList, dataServerResponse, addEmployeeSchema, fullEmployeeData } from "../utils/types";

const BASE_URL = 'http://localhost:3030/jsonstore/employees';

export const getAllEmployees = async (): Promise<EmployeeList> => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch employees');
    }

    const result: dataServerResponse = await response.json();

    if (response.status === 204) {
        return [];
    }

    return Object.values(result);
};

export const getOneEmployee = async (id: string | undefined): Promise<fullEmployeeData> => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch employee');
    }

    const employee: fullEmployeeData = await response.json();
    return employee;
};

export const addEmployee = async (data: addEmployeeSchema): Promise<fullEmployeeData> => {
    const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error('Failed to add employee');
    }

    return await response.json();
};

export const editEmployee = async (employeeData: fullEmployeeData): Promise<fullEmployeeData> => {
    const response = await fetch(`${BASE_URL}/${employeeData._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error('Failed to edit employee');
    }

    return await response.json();
};

export const deleteEmployee = async (id: string): Promise<void> => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Failed to delete employee');
    }
};