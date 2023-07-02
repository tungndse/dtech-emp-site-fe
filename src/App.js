import logo from './logo.svg';
import './App.css';
import HeaderGenerator from "./component/HeaderGenerator";
import EmployeeCataloger from "./component/EmployeeCataloger";
import EmployeeRegistrar from "./component/EmployeeRegistrar";
import FooterGenerator from "./component/FooterGenerator";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <HeaderGenerator />

        <div className="container">
          <Routes>
            <Route path="/" element={<EmployeeCataloger />} />
            <Route path="/employees" element={<EmployeeCataloger />} />
            <Route path="/add-employee" element={<EmployeeRegistrar />} />
            <Route path="/add-employee/:id" element={<EmployeeRegistrar />} />
          </Routes>
        </div>

        <FooterGenerator />
      </BrowserRouter>
  );
}

export default App;
