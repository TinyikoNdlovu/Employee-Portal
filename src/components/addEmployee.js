
import React, { useState } from "react";

import "../css/addEmployee.css";
// import EmployeeDataService from "../services/employeeServices";

const AddEmployee = props => {

    const [employee, setEmployee] = useState({
        name:'',
        lastname:'',
        email:''
    })

    const add = event => {
        event.preventDefault();
        props.submitEmployee(employee);
        setEmployee({name:'', lastname:'', email:''})
    }

    const handleChange = (event) => {
        event.preventDefault();
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        })
    }

  return (
    <form style={{margin:'20px'}} onSubmit={add}>
        <div className="add-employees" style={{border:'1px solid #dedede', borderRadius:'20px', width:'80%', margin:'20px'}}>
            <label style={{textAlign:'center'}} className="new-emp">New Employee</label>
        
            <div className="input-fields">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Enter first name" value={employee.name} onChange={handleChange} />  
            </div>

            <div className="input-fields">
                <label htmlFor="surname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter last name" value={employee.lastname} onChange={handleChange} /> 
            </div>

            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" value={employee.email} onChange={handleChange} />
            </div>
            <div className="btn-container">
                <button type="submit">Add Employee</button>
            </div>
        </div>
        </form>
  );

}

export default AddEmployee;

