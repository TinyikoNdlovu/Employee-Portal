
import './App.css';

import React, {useState, useEffect} from "react";
import {db} from "./firebaseConfig";
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';

// import EmployeeDataService from "./services/employeeServices";
import { addDoc, collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

function App() {

  const [employees, setEmployees] = useState ([]);
  const collectionRef = collection(db, "employees");

  useEffect(()=>{
    getEmployees();
  }, []);

  const getEmployees = async() => {
    const data = await getDocs(collectionRef);
    setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
};

const deleteEmployee = async(id) => {
 let data = await doc(collectionRef, id);
 await deleteDoc(data).then(getEmployees());
}

const updateEmployee = (id, updatedEmployee, handleClose) => {
  setEmployees([
    ...employees.slice(0, id),
    updatedEmployee,
    ...employees.slice(id + 1, employees.length)
  ])
  handleClose()
}

const submitNewEmployee = async(employee) => {
  await addDoc(collectionRef, employee).then(
    () => {
      getEmployees();
      alert(employee.name + " added successfully");
    }
  ).catch(error=>{
    alert(error.message);
  })
  
}

  return (
    <div className="App">
    
      <div className='container'>
        <AddEmployee submitEmployee={submitNewEmployee} />
        <EmployeeList list={employees} removeEmployee={deleteEmployee} updateEmployee={updateEmployee} />
      </div>
     
    </div>
  );
}

export default App;
