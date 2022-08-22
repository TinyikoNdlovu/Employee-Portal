
import { db } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

import "../css/newEmployee.css";
// import EmployeeDataService from "../services/employeeServices";

const NewEmployee = props =>  {

    const [employee, setEmployee] = useState({
        name:'',
        lastname:'',
        email:''
    })

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');

    

    const add = event => {
        event.preventDefault();
        props.submitEmployee(employee);
        setEmployee({name:'', lastname:'', email:''})
    }

    const clearInput = () => {
        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
        document.getElementById('email').value = "";
    }

  return (
    <form style={{margin:'20px', marginTop:'60px'}} onSubmit={add}>
        <div className="add-employees" style={{border:'2px solid #dedede', borderRadius:'20px', width:'25em', margin:'20px'}}>
            <label style={{textAlign:'center'}} className="new-emp">New Employee</label>
        
            <div className="input-fields">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Enter first name" onChange={(e) => props.setName(e.target.value)} />  
            </div>

            <div className="input-fields">
                <label htmlFor="surname">Last Name</label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter last name" onChange={(e) => props.setLastName(e.target.value)} /> 
            </div>

            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" onChange={(e) => props.setEmail(e.target.value)} />
            </div>
            <div className="btn-container">
                <button type="submit" id="btn" onClick={clearInput}>Add Employee</button>
            </div>
        </div>
        </form>
  );

}

export default NewEmployee;

