
import './App.css';

import React from "react";
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';
import UpdateEmployee from './components/updateEmployee';

import { useState, useEffect } from 'react';
import { db } from "./firebaseConfig";
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

import fireDb from "../firebase";
import {toast} from "react-toastify";

function App() {
  const [employees, setEmployees] = useState([]);
  const employeeRef = collection(db, "employees");

  const [name, setFName] = useState("")
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async() => {
    let data = await getDocs(employeeRef);
    console.log(data);
    setEmployees(data.docs.map(doc =>({...doc.data(), id: doc.id}))); 

  } 

  const addEmployee = async(name,lastname,email) => {
    addDoc(employeeRef, {name: name, lastname: lastname, email: email});
    getEmployees();
  }

  const deleteEmployee = async(id) => {
    if(window.confirm("Are you sure that you want to delete that Employee ?")){
      let employee = await doc(employeeRef, id).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          await deleteDoc(employee).then(getEmployees());
          toast.success("Employee Deleted Successfully");
        }
      });
    }
  }

  const updateEmployee = async(id, empData) => {
    let employee = await doc(employeeRef, id);
    await updateDoc(employee, empData).then(getEmployees());
  }

  return (
    <div className="App">
    
      <div className='container'>
        <AddEmployee addEmployee ={addEmployee} name = {name} setFName = {setFName} lastname = {lastname} setLName = {setLName} email = {email} setEmail = {setEmail} />
        <EmployeeList employees = {employees} deleteEmp = {deleteEmployee} name = {name} lastname = {lastname} email = {email} />
        <updateEmployee updateEmp = {updateEmployee} name = {name} lastname = {lastname} email = {email} />
      </div>
     
    </div>
  );
}

export default App;
