import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

import Logoutfun from '../MainComponets/Logout';
import Upload from './Imageupload';
import { Logout } from '@mui/icons-material';
import { useNavigate ,useParams} from 'react-router-dom'
import AxiosInstance from '../Axiosinstance';
import { useState } from 'react';
import { useEffect } from 'react';
export default function AccountMenu() {
    const mypram=useParams()
    const myId=mypram.id
  
  const [mydata,setmydata]= useState()
  const Getdata=()=>{
    AxiosInstance.get(`user/${myId}`).then((res)=>{
      setmydata(res.data)
      console.log(res.data)
  
    })
  }
    useEffect(()=>{
      Getdata();
    },[]
    );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>{mydata?.email}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem onClick={(event) => { event.stopPropagation(); }}>
          <Upload/>
        </MenuItem> */}
       
        <MenuItem onClick={(event) => { event.stopPropagation(); }} component={Link}to="/request/Password_reset">
        <ListItemIcon>
         <LockIcon fontSize="small" />
         </ListItemIcon>
         change password
          </MenuItem>
          {/* <MenuItem onClick={handleClose} component={Link} to={`user/id`}>
          <Avatar /> My account
        </MenuItem>
        <Divider /> */}
        <MenuItem onClick={(event) => { event.stopPropagation(); }} component={Link}to="/Register">
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another User
        </MenuItem>
        <MenuItem onClick={(event) => { event.stopPropagation(); }}>
        <ListItemIcon>
         <Logout fontSize="small" />
         </ListItemIcon>
            <Logoutfun />
          </MenuItem>
          
      </Menu>
    </React.Fragment>
  );
}
