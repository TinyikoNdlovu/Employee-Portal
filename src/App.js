import logo from './logo.svg';
import './App.css';

import React from "react";
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';

import { useState, useEffect } from 'react';
import { db } from "./firebaseConfig";
import {collection, getDocs, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";

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
    let employee = await doc(employeeRef, id);
    await deleteDoc(employee).then(getEmployees());
  }

  const updateEmployee = async(id, empData) => {
    let employee = await doc(employeeRef, id);
    await updateDoc(employee, empData).then(getEmployees());
  }

  return (
    <div className="App">
    
      <div className='container'>
        <AddEmployee addEmployee ={addEmployee} name = {name} setFName = {setFName} lastname = {lastname} setLName = {setLName} email = {email} setEmail = {setEmail} />
        <EmployeeList employees = {employees} deleteEmp = {deleteEmployee} updateEmp = {updateEmployee} name = {name} lastname = {lastname} email = {email} />
      </div>
     
    </div>
  );
}

export default App;
