import React from "react"
import "../css/employeeList.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EmployeeList = ({employees, deleteEmp, updateEmp, name, lastname, email}) => {
    console.log(employees);
    return (
        <div className="container-list">
            <h1 className="emp-list">Employee List</h1>
            <table>
                <thead>
                <tr className="heading-list">
                    <th style={{textAlign: "center"}} className="heading">Name</th>
                    <th style={{textAlign: "center"}} className="heading">Last Name</th>
                    <th style={{textAlign: "center"}} className="heading">Email</th>
                    <th style={{textAlign: "center"}} className="heading">Action</th>
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
                                <button className="edit-btn" to={'/updateEmployee/${id}'}><EditIcon id="i" /></button>
                                <button className="delete-btn" onClick={()=> deleteEmp(employee.id)}><DeleteIcon id="i" /></button>
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
