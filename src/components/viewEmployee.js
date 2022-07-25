import React, {useState, useEffect} from "react";
import {db} from "../firebaseConfig";
import {useParams, Link} from "react-router-dom";

const ViewEmployee = () => {
    const [employee, setEmployee] = useState({});

    const {id} = useParams();

    useEffect(() => {
        db.child(`employees/${id}`).get().then((snapshot) => {
            if(snapshot.exists()) {
                setEmployee({...snapshot.val()})
            } else {
                setEmployee({})
            }
        });
    }, [id]);
    console.log("employee", employee);
    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card">
            <div className="card-header">
                <p>Employee Details</p>
            </div>
            <div className="container">
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name:</strong>
                <span>{employee.name}</span>
                <br />
                <br />
                <strong>Last Name:</strong>
                <span>{employee.lastName}</span>
                <br />
                <br />
                <strong>Email:</strong>
                <span>{employee.email}</span>
                <br />
                <br />
                <Link to="/">
                    <button className="btn btn-edit">Go Back</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ViewEmployee;
