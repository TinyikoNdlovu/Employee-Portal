
import React from "react";
// import EmployeeDataService from "../services/employeeServices";

import "../css/employeeList.css";


import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateModal from "./updateEmployeeModal";
import ViewEmployee from "./viewEmployee";
import { Link } from "react-router-dom";



function EmployeeList ({list, removeEmployee, name, lastname, email}) {

    return (
        <div className="container-list">
            <label style={{textAlign:'center'}} className="emp-list">Employee List</label>
            <table>
                <thead>
                <tr className="heading-list">
                    <th scope="col" style={{textAlign: "left"}} className="heading">Name</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Last Name</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Email</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    
                    list.map((employee, id) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <UpdateModal selectedEmployee={employee} update={list.updateEmployee}></UpdateModal> 
                                <button className="delete-btn" onClick={(e) => removeEmployee(employee.id)}><DeleteIcon id="i" /></button> 
                                 <button className="visibility-btn"><VisibilityIcon id="i" /></button> 
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                
            </table>
        </div>
    );
}

export default EmployeeList;