
import './App.css';

import React, {useState, useEffect} from "react";
import {db} from "./firebaseConfig";
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';

// import EmployeeDataService from "./services/employeeServices";
import { addDoc, collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

function App() {

  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [employee, setEmployee] = useState ([]);
  const collectionRef = collection(db, "employees");

  useEffect(()=>{
    getEmployees();
  }, []);

  const addEmployee = (() => {

    const newEmployee = {
      name: name,
      lastname: lastname,
      email: email,
    };
    console.log(newEmployee);

    addDoc(collectionRef, newEmployee).then(()=>{
        if(name === "" || lastname === "" || email === "") {
          alert("All fields are required, please fill them");
        } else {
          alert("Employee added successfully");
          getEmployees();
        }
      
    }).catch((err)=>{
      console.log(err);
    })

  })

  const getEmployees = async() => {
    const data = await getDocs(collectionRef);
    setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
};

const deleteEmployee = async(id) => {
 let data = await doc(collectionRef, id);
 await deleteDoc(data).then(getEmployees());
}

const updateEmployee = (id, updatedEmployee, handleClose) => {
  setEmployee([
    ...employee.slice(0, id),
    updatedEmployee,
    ...employee.slice(id + 1, employee.length)
  ])
  handleClose()
}

  return (
    <div className="App">
    
      <div className='container'>
        <AddEmployee add = {addEmployee} name={name} setName={setName} lastname={lastname} setLastName={setLastName} email={email} setEmail={setEmail} />
        <EmployeeList list={employee} removeEmployee={deleteEmployee} updateEmployee={updateEmployee} />
      </div>
     
    </div>
  );
}

export default App;
