
import React from "react";

import "../css/addEmployee.css";
// import EmployeeDataService from "../services/employeeServices";

function AddEmployee ({addEmployee, name, setName, lastname, setLastName, email, setEmail}) {

  return (
    <form>
            <div className="add-employees">
            <h1 className="new-emp">New Employee</h1>
        
            <div className="input-fields">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Enter first name" value={name} onChange={(e)=> setName(e.target.value)} />  
            </div>

            <div className="input-fields">
                <label htmlFor="surname">Last Name</label>
                <input type="text" id="surname" name="surname" placeholder="Enter last name" value={lastname} onChange={(e)=> setLastName(e.target.value)} /> 
            </div>

            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div className="btn-container">


                <button type="submit" onClick={() => addEmployee(name, lastname, email)}>Add Employee</button>
            </div>
        </div>
        </form>
  );

}

export default AddEmployee;

