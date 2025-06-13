import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MarginOutlinedIcon from '@mui/icons-material/MarginOutlined';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import { Link, useLocation } from 'react-router-dom';

import AddBoxIcon from '@mui/icons-material/AddBox';
import HomeIcon from '@mui/icons-material/Home';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';


export default function ShortMenu() {
  const [open, setOpen] = React.useState(true);
  const location = useLocation();
  const path = location.pathname;
  console.log(path)
  

  return (
    <>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      
    >
      
      <ListItemButton  sx={{display:'flex',justifyContent:'center'}}  component={Link}to="/Dashboard" 
        selected={path ==="/Dashboard"}>
    <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
    <InsertChartIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
    </ListItemIcon>
    </ListItemButton>

      <ListItemButton  sx={{display:'flex',justifyContent:'center'}}  component={Link}to="/Departement" 
        selected={path ==="/Departement"}>
    <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
    <MarginOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
    </ListItemIcon>
    </ListItemButton>
    <ListItemButton  component={Link}to="/EmployeDetails" selected={path === '/EmployeDetails'} sx={{display:'flex',justifyContent:'center'}}>
      <ListItemIcon  sx={{display:'flex',justifyContent:'center'}}>
      <GroupsOutlinedIcon sx={{ color: 'rgba(29, 24, 245, 0.85)' }} />
      </ListItemIcon>
      </ListItemButton>
    </List>
   
  </>
  );
}
