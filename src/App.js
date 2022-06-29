
import './App.css';

import React, {useState, useEffect} from "react";
import AddEmployee from './components/addEmployee';
import EmployeeList from './components/employeeList';

function App() {

  const [employee, setEmployee] = useState ([]);

  useEffect(()=>{})

  const addEmployee = ((name, lastName, email) =>{
    setEmployee((names)=> [...names, {
      name:name,
      lastName:lastName,
      email:email
    }])
  })

  return (
    <div className="App">
    
      <div className='container'>
        <AddEmployee add = {addEmployee} />
        <EmployeeList />
      </div>
     
    </div>
  );
}

export default App;
