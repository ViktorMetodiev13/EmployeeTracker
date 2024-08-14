import { Route, Routes } from "react-router-dom";

import { deleteEmployee, getAllEmployees } from "./services/employee";

import { EmployeeList } from "./utils/types";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { ListOfEmployees } from "./components/ListOfEmployees/ListOfEmployees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
    const [employees, setEmployees] = useState<EmployeeList>([]);

    useEffect(() => {
        getAllEmployees()
            .then(result => {
                setEmployees(result);
            })
    }, []);

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
                <Route path="/addemployee" element={<AddEmployee />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
