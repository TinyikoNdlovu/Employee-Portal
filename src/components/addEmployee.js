
import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import "../css/addEmployee.css"

function AddEmployee({addEmployee, name, lastname, email, setFName, setLName, setEmail}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !lastname || !email) {
          toast.error("Please provide value in each Input Field");
        } else {
          fireDb.child(employees).push(state, (err) => {
            if (err) {
              toast.error(err);
            } else {
              toast.success("Employee Added Successfully");
            }
          });
        }
      };

    return (

        <form style={{margin: "auto",
        padding: "15px",
        alignContent: "left"}} 
        onSubmit={handleSubmit}
        >
            <div className="add-employees">
            <h1 className="new-emp">New Employee</h1>
        
            <div className="input-fields">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="name" placeholder="Enter first name" onChange={(e) => setFName(e.target.value)} />  
            </div>

            <div className="input-fields">
                <label htmlFor="surname">Last Name</label>
                <input type="text" id="surname" name="surname" placeholder="Enter last name" onChange={(e) => setLName(e.target.value)} /> 
            </div>

            <div className="input-fields">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="btn-container">
                <button type="button" onClick={()=> addEmployee(name, lastname, email)}>Add Employee</button>
            </div>
        </div>
        </form>
    );
}

export default AddEmployee;