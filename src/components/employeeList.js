
import React from "react";
// import EmployeeDataService from "../services/employeeServices";

import "../css/employeeList.css";
import {db} from "../firebaseConfig";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";


function EmployeeList ({list}) {

    const updateEmployee = async (id, name, lastName, email) => {
        const employeeDoc = doc(db, "employees", id);
        const newFields = {name: name, lastName: lastName, email: email};
        await updateDoc(employeeDoc, newFields);
        alert("Employee updated successfully!");
    }

    const deleteEmployee = async(id) => {
        const employeeDoc = doc(db, "employees", id);
        await deleteDoc(employeeDoc);
        alert("Do you really want to delete this Employee!");
        
    };

    const viewHandler = async() => {}

    return (
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
                    
                    list.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="edit-btn" onClick={(e) => updateEmployee(doc.id)}><EditIcon id="i" /></button> 
                                <button className="delete-btn" onClick={(e) => deleteEmployee(doc.id)}><DeleteIcon id="i" /></button> 
                                 <button className="visibility-btn" onClick={(e) => viewHandler(doc.id)}><VisibilityIcon id="i" /></button> 
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