import { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Axiosinstance';
import Mymessage from '../form/Message'
import Mybutton from '../form/Button'
import'../../App.css'

import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Logout } from '@mui/icons-material';



function  Logoutfun() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Navigate = useNavigate()

  const logoutuser = () => {
    AxiosInstance.post(`logoutall/`, {
    })
      .then(() => {
        setTimeout(() => {
        }, 2000);
        localStorage.removeItem('Token')
        window.location.reload();
        Navigate('/')
      })


  }
  return (
    <React.Fragment>
      
      <>
      <Typography  onClick={handleClickOpen}>
        Logout
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={logoutuser} autoFocus >
          logout
          </Button>
        </DialogActions>
      </Dialog>
      </>
    </React.Fragment>
   
  )
}

export default Logoutfun
