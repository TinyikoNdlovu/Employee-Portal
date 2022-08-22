
import './App.css';

import React, {useState, useEffect} from "react";
import { db } from "./firebaseConfig";
import NewEmployee from './components/newEmployee';
import EmployeeList from './components/employeeList';

// import EmployeeDataService from "./services/employeeServices";
import { addDoc, collection, getDocs, deleteDoc, updateDoc, doc} from 'firebase/firestore';
import { Grid } from '@mui/material';

function App() {

  const [employees, setEmployees] = useState ([]);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
   const [email, setEmail] = useState('');
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

const updateEmployee = async(employee, id, updatedEmployee, handleClose) => {
  await updateDoc(collectionRef, id, {name: employee.name, lastname: employee.lastname, email:employee.email }).then( ()=> {
    getEmployees();
    console.log(updatedEmployee);
    alert(employee.name + "updated successfully");
  }).catch(error => {
    alert(error.message);
  })
  setEmployees([
    ...employee.slice(0, id),
    updatedEmployee,
    ...employee.slice(id + 1, employee.length)
  ])
  handleClose()
}

const submitNewEmployee = async(newEmployee) => {
  //console.log(newEmployee);
  const collectionRef = collection(db, "employees");

  const employee = {
    name: name,
    lastname: lastname,
    email: email,
};
  
  await addDoc(collectionRef, employee).then(
    () => {
      getEmployees();
      alert(employee.name + " added successfully");
    }
  ).catch(error => {
    alert(error.message);
  })
  
}


  return (
    <div className="App">
    
      <div className='container'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
          <NewEmployee submitEmployee={submitNewEmployee} setName={setName} setLastName={setLastName} setEmail={setEmail}/>
          </Grid>

          <Grid item xs={8}>
          <EmployeeList employeeList={employees} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee} />
          </Grid>
        </Grid>
        
        
      </div>
     
    </div>
  );
}

export default App;
