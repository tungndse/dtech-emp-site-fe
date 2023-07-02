import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import EmployeeService from '../service/EmployeeService';

const EmployeeCataloger = () => {
    const [employeeArray, setEmployeeArray] = useState([]);
    const navigate = useNavigate();

    const refreshPage = () => {
        navigate(0);
    }

    useEffect(() => {
        getAllEmployee();
    }, []);

    function getAllEmployee() {
        EmployeeService.getAll()
            .then(res => { setEmployeeArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deleteEmployee(e, id) {
        e.preventDefault()
        EmployeeService.deleteOne(id)
            //.then(EmployeeService.getAll()).catch(e => console.log(e))
            .then(refreshPage);
    }


    return (
        <div className='container'>
            <Link to={"/add-employee"} className='btn btn-primary mb-2 mt-3' href="">Add Employee</Link>
            <h2 className='text-center mb-4'>Employees List</h2>
            <table className='table table-bordered table striped'>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                {employeeArray.map(employee =>
                    <tr id={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <Link to={`/add-employee/${employee.id}`} className='btn btn-info' href="">Update</Link> {" "}
                            <a onClick={(e) =>
                                deleteEmployee(e, employee.id)} className='btn btn-danger'>Delete</a>

                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>
    )
}

export default EmployeeCataloger;