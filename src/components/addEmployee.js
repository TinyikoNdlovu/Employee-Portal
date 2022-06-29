
import React, { useState } from "react";

import { Alert } from "react-bootstrap"; 

import "../css/addEmployee.css";
import {db} from "../firebaseConfig";
import {addDoc, collection} from "firebase/firestore";
import EmployeeDataService from "../services/employeeServices";

function AddEmployee (props) {

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState({error:false, msg:""});

    const add = (() => {
      const collectionRef = collection(db, "employees");

      const newEmployee = {
        name: name,
        lastname: lastname,
        email: email,
      };
      console.log(newEmployee);

      addDoc(collectionRef, newEmployee).then(()=>{
        alert("Employee added successfully")
      }).catch((err)=>{
        console.log(err);
      })

      props.add(name, lastname, email);
      setName("");
      setLastName("");
      setEmail("");
      
    })
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      setMessage("");
      if (name === "" || lastname === "" || email === "") {
        setMessage({ error:true, msg: "All input fields are required, fill all fields!"});
        return;
      } 
      
    };

  return (

    <>
    <div className="p-4 box">
    {message?.msg && ( 
      <Alert variant={message?.error ? "danger" : "success"} 
      dismissible 
      onClose={() => setMessage("")}
      >
   
    {message?.msg}
    </Alert>
    )}
    <form onSubmit={handleSubmit}>
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


                <button type="submit" onClick={add}>Add Employee</button>
            </div>
        </div>
        </form>
        </div></>
  );

}

export default AddEmployee;

