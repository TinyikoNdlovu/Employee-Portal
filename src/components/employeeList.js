
import React from "react";
// import EmployeeDataService from "../services/employeeServices";

import "../css/employeeList.css";


import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateModal from "./updateEmployeeModal";
import ViewEmployee from "./viewEmployee";
import { Link } from "react-router-dom";

const TableHeader = () => {
    return (
        
        <thead>  
            <tr className="heading-list">
                    <th scope="col" style={{textAlign: "left"}} className="heading">Name</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Last Name</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Email</th>
                    <th scope="col"  style={{textAlign: "left"}} className="heading">Action</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {

    const rows = props.employeeList.map((employee, id) => {
        return (
            <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.email}</td>
                            <td>
                                <UpdateModal selectedEmployee={employee} id={id} update={props.updateEmployee}></UpdateModal>    
                            </td>
                            <td><button className="delete-btn" onClick={(e) => props.deleteEmployee(id)}><DeleteIcon id="i" /></button></td>
                        </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const EmployeeList = (props) => {
    const {employeeList, deleteEmployee, updateEmployee} = props;

    return (
        <div className="container" style={{marginLeft:'55%'}}>
            <label style={{textAlign:'center', marginLeft:'100%', backgroundColor:' #D3D3D3', width:'350px', height:'50px', marginTop:'25px'}} className="emp-list">Employee List</label>
            <table style={{paddingTop:'20%', marginLeft:'1%'}}>
                <TableHeader></TableHeader>
                <TableBody employeeList={employeeList} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee} ></TableBody>
            </table>
        </div>
    )
}

export default EmployeeList;