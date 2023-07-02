import React, {useState, useEffect} from 'react'
import EmployeeService from '../service/EmployeeService';
import {Link, useNavigate, useParams} from 'react-router-dom';

const EmployeeRegistrar = () => {
    /** Variables and method to collect and store inputes */
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const refreshPage = () => {
        navigate(0);
    }

    const employeeData = {firstName, lastName, email}; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveEmployee(e) {
        e.preventDefault();

        if (employeeData.firstName !== "" && employeeData.lastName !== "" && employeeData.email !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (id) {
                EmployeeService.updateOne(id, employeeData)
                    .then(navigate("/employees", {replace: true}))
                    .catch(e => console.log(e))
                    .then(refreshPage);
            } else {
                EmployeeService.saveOne(employeeData)
                    .then(navigate("/employees", {replace: true}))
                    .catch(e => console.log(e))
                    .then(refreshPage);

            }

        } else {
            alert("Please, fill in all inputs");
        }
    }

    function actionTitle() {
        if (id) {
            return "Update Employee";
        } else {
            return "Add Employee";
        }
    }

    useEffect(() => {
        if (id) {
            EmployeeService.getOne(id)
                .then(res => {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{actionTitle()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                           value={firstName}
                                           onChange={(e) => setFirstName(e.target.value)}
                                           type="text" placeholder='Enter First Name'/>
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                           value={lastName}
                                           onChange={(e) => setLastName(e.target.value)}
                                           type="text" placeholder='Enter Last Name'/>
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           type="email" placeholder='Enter Email'/>
                                </div>
                                <button onClick={(e) =>
                                    saveEmployee(e)} className='btn btn-success'>Save
                                </button>
                                {" "}
                                <Link to={"/employees"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRegistrar;