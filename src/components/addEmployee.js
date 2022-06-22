
import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import "../css/add.css"

function AddEmployee({addEmployee, name, lastname, email, setFName, setLName, setEmail}) {

    return (

        <form>
            <div className="title">
            <h1 className="new-emp">New Employee</h1>
        </div>
            <div>
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" onChange={(e) => setFName(e.target.value)} />  
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" onChange={(e) => setLName(e.target.value)} /> 
            </div>

            <div>
                <label>Email</label>
                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn-container">
                <button type="button" onClick={()=> addEmployee(name, lastname, email)}>Add Employee</button>
            </div>
        </form>
    );
}

export default AddEmployee;