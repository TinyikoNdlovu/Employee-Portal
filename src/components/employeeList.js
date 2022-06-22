import React from "react"
import "../css/list.css";

const EmployeeList = ({employees, deleteEmp, updateEmp, name, lastname, email}) => {
    console.log(employees);
    return (
        <div>
            <h1 className="emp-list">Employee List</h1>
            <table>
                <thead>
                <tr>
                    <td className="heading">Name</td>
                    <td className="heading">Last Name</td>
                    <td className="heading">Email</td>
                    <td className="heading">Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    
                    employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button onClick={()=> updateEmp(employee.id, {name:name, lastname:lastname, email:email})}>Edit</button>
                                <button onClick={()=> deleteEmp(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                
            </table>
        </div>
    )
}

export default EmployeeList;
