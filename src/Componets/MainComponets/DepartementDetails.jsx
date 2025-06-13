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

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/material'
function DeptDetails() {
const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)
const Getdata=()=>{
  AxiosInstance.get('departement/').then((res)=>{
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
        accessorKey: 'name_of_departement',
        header: 'Departement Name',
        size: 150,
      },
     
      {
        accessorKey: 'departement_code',
        header: 'Departement code',
        size: 150,
      },
     
      {
        accessorKey: 'description', //normal accessorKey
        header: 'Description',
        size: 200,
      },
      
      
      
    ],
    [],
  );


     
  return (
    <Navbar drawerWidth={200} content={
    <div>
      <Box sx={{ display: 'flex', marginBlockEnd: '0%',backgroundColor:'#2481ce' , marginBottom:
         '1px', boxShadow: '0', justifyContent: 'space-around', marginLeft: '0%' }}>
                < ListItemButton sx={{ display: 'flex', marginLeft: '0px' }}  >
                <Typography sx={{ marginLeft: ' 5px', color: '#fff', flexGrow: '1' ,fontWeight:'bold',fontSize:'20px'}}>
                  Departement Detaials Table
                </Typography>
                <Box  component={Link}to="/Departement_add" sx={{marginRight:'auto'}}>
                  <ListItemIcon sx={{ display: 'flex' }} >
                    <AddBoxIcon sx={{  color: '#fff',fontSize:'20px'}} />
                  </ListItemIcon>
                </Box>
                </ListItemButton>
              </Box>
      
      {loading?<p>loading data...<h1><progress>loading data</progress></h1>
      </p>:
      
          <MaterialReactTable 
          
          enableRowActions
          positionActionsColumn='last'
          renderRowActions={({row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px',marginRight:'5px'}}>
              
              <IconButton
                color="secondary" component={Link}to={`edit/${row.original.id}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"component={Link}to={`delete/${row.original.id}`}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          columns={columns} 
          data={mydata}
          />
         }
    </div>
    }/>
  )
};

export default DeptDetails
