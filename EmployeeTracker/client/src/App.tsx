import { Route, Routes, useNavigate } from "react-router-dom";

import { addEmployee, deleteEmployee, editEmployee, getAllEmployees } from "./services/employee";

import { EmployeeList, addEmployeeSchema, fullEmployeeData } from "./utils/types";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { ListOfEmployees } from "./components/ListOfEmployees/ListOfEmployees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { EditEmployee } from "./components/EditEmployee/EditEmployee";

function App() {
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

            setEmployees(state => state.map(e => e._id === e._id ? newEmployeeData : e));

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

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<ListOfEmployees
                    employees={employees}
                    onDeleteEmployee={onDeleteEmployee}
                />} />
                <Route path="/addemployee" element={<AddEmployee
                    onAddEmployee={onAddEmployee}
                />} />
                <Route path="/employees/:id/edit" element={<EditEmployee onEditEmployee={onEditEmployee}/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
