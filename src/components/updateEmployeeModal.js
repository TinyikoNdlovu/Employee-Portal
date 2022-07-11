import React, { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import "../css/updateEmployeeModal.css";
import EditIcon from "@mui/icons-material/Edit";

const UpdateModal = (list) => {
    const [open, setOpen] = React.useState(false);
    const {selectedEmployee, id, update} = list
    const [newValue, setValue] = useState({name:selectedEmployee.name, lastname:selectedEmployee.lastname, email:selectedEmployee.email})

  const handleClickOpen = () => {
    console.log(selectedEmployee);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({
        ...newValue,
        [e.target.name]:e.target.value
    });
  }

  return (
    <div>
      <Button className="update-btn" variant="outlined" onClick={handleClickOpen}>
      <EditIcon id="i" />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update an employee to this website, please enter their new details here.
          </DialogContentText>
          <label className="text-label">Name</label>
          <input 
          className="input-field" 
          type="text" name="name" 
          id="name" 
          value={newValue.name} 
          onChange={handleChange} />

          <label className="text-label">Last Name</label>
          <input 
          className="input-field" 
          type="text" 
          name="lastname" 
          id="lastname" 
          value={newValue.lastname} 
          onChange={handleChange}  />

          <label className="text-label">Email</label>
          <input 
          className="input-field" 
          type="email" 
          name="email" 
          id="email" 
          value={newValue.email} 
          onChange={handleChange}  />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => update(id, newValue, handleClose)}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateModal;