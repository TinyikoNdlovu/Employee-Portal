
import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import "../css/addEmployee.css"

function AddEmployee({addEmployee, name, lastname, email, setFName, setLName, setEmail}) {

    return (

        <form>
            <div className="add-employees">
            <h1 className="new-emp">New Employee</h1>
        
            <div className="input-fields">
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" onChange={(e) => setFName(e.target.value)} />  
            </div>

            <div className="input-fields">
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" onChange={(e) => setLName(e.target.value)} /> 
            </div>

            <div className="input-fields">
                <label>Email</label>
                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn-container">
                <button type="button" onClick={()=> addEmployee(name, lastname, email)}>Add Employee</button>
            </div>
        </div>
        </form>
    );
}

export default AddEmployee;