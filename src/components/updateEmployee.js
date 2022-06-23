import React, {useState} from "react";
import { db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import "../css/updateEmployee.css"

function UpdateEmployee({updateEmp, name, lastname, email, setFName, setLName, setEmail}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !lastname || !email) {
          toast.error("Please provide value in each Input Field");
        } else {
          fireDb.child(employees).push(state, (err) => {
            if (err) {
              toast.error(err);
            } else {
              toast.success("Employee Updated Successfully");
            }
          });
        }
      };

    return (

        <form style={{margin: "auto",
        padding: "15px",
        alignContent: "left"}} 
        onSubmit={handleSubmit}>
            <div className="update-employees">
            <h1 className="update-emp">Update Employee Details Here</h1>
        
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
            
            <div>
                <button type="button" onClick={()=> updateEmp(employee.id, {name:name, lastname:lastname, email:email})}>Update Employee</button>
                <button type="button" onClick={()=> cancelClose()}>Cancel/Close</button>
                </div>
            
        </div>
        </form>
    );
}

export default UpdateEmployee;