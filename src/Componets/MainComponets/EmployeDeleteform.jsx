import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AxiosInstance from '../Axiosinstance';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function Deleteemp() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get ID from URL
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    navigate('/EmployeDetails'); // Redirect if cancelled
  };

  const handleDelete = () => {
    AxiosInstance.delete(`empdetails/${myId}/`)
  .then((res)=>{
    navigate('/EmployeDetails')
  })
      .catch((error) => {
        console.error("Error deleting employee:", error);
      });
  };

  return (
    <Dialog open={open} onClose={handleClickOpen}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to delete this employee?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} sx={{ color: 'red' }}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
