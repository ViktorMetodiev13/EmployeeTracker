import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { ListOfEmployees } from "./components/ListOfEmployees/ListOfEmployees";
import { AddEmployee } from "./components/AddEmployee/AddEmployee";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<ListOfEmployees />} />
                <Route path="/addemployee" element={<AddEmployee />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
