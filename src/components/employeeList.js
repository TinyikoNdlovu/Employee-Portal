
import React, { useEffect, useState } from "react";
import EmployeeDataService from "../services/employeeServices";

import "../css/employeeList.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async() => {
        const data = await EmployeeDataService.getAllEmployees();
        console.log(data.docs);
        setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
    } ;

    return (
        <>
        <div className="container-list">
            <h1 className="emp-list">Employee List</h1>
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
                    
                    employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="edit-btn"><EditIcon id="i" /></button> 
                                <button className="delete-btn"><DeleteIcon id="i" /></button> 
                                 <button className="visibility-btn"><VisibilityIcon id="i" /></button> 
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                
            </table>
        </div></>
    );
}

export default EmployeeList;