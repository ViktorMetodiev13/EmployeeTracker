import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { ListOfEmployees } from "./components/ListOfEmployees/ListOfEmployees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { Footer } from "./components/Footer/Footer";
import { EditEmployee } from "./components/EditEmployee/EditEmployee";
import { useEmployee } from "./hooks/useEmployee";

function App() {
    const { employees, onAddEmployee, onEditEmployee, onDeleteEmployee } = useEmployee();

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
