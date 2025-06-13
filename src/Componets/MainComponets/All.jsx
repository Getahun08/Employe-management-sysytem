import React from 'react'
import AxiosInstance from '../Axiosinstance'
import { useState,useEffect,useMemo } from 'react'
import {Typography} from '@mui/material';
import { MaterialReactTable, } from 'material-react-table';
import {IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import {ListItemButton} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Navbar from '../Navbar';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/material'
function users() {
const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)
const Getdata=()=>{
  AxiosInstance.get('user/').then((res)=>{
    setmydata(res.data)
    console.log(res.data)
    setloading(false)

  })
}
useEffect(()=>{
  Getdata();
},[]
);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
      },
     
      {
        accessorKey: 'email',
        header: 'Email',
        size: 150,
      },
     
      
    ],
    [],
  );


     
  return (
     <Navbar drawerWidth={200} content={
    <div>
      <Box sx={{display:'flex',width:'100%',backgroundColor:'#00004f',marginBottom:'10px',boxShadow:'1',
      justifyContent:'space-around'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff',justifyContent:'center'}}>
             user Detaials Table
          </Typography>
          < ListItemButton  sx={{display:'flex',marginLeft:'960px'}}  component={Link}to="/Register" >

             <ListItemIcon  sx={{display:'flex'}}>
              <PersonAddAlt1OutlinedIcon sx={{ color: '#fff' }} />
               </ListItemIcon>
                </ListItemButton>
        </Box>
      
      {loading?<p>loading data...<h1><progress>loading data</progress></h1>
      </p>:
      
          <MaterialReactTable 
          columns={columns} 
          data={mydata}
          
        
          />
         }
    </div>
     }/>
  )
};

export default users
