export type Employee = {
    email: string;
    name: string;
    phone: string;
    role: string;
    _id: string;
    startedWorkingAt: string;
};

export type dataServerResponse = {
    _id: {
        name: string;
        email: string;
        phone: string;
        role: string;
        _id: string;
        startedWorkingAt: string;
    };
};

export type fullEmployeeData = {
    name: string;
    email: string;
    phone: string;
    role: string;
    _id: string;
    startedWorkingAt: string;
};

export type addEmployeeSchema = {
    name: string;
    email: string;
    phone: string;
    role: string;
    startedWorkingAt: string;
};

// export type editEmployeeSchema = {
//     name: string;
//     email: string;
//     phone: string;
//     role: string;
// };

export type EmployeeList = Employee[];