import React from 'react'
import AxiosInstance from '../Axiosinstance'
import { useState, useEffect, useMemo } from 'react'
import { Typography } from '@mui/material';
import { MaterialReactTable, } from 'material-react-table';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import Navbar from '../Navbar';

import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/material'
function EmpDetails() {
  const [mydata, setmydata] = useState()
  const [loading, setloading] = useState(true)
  const Getdata = () => {
    AxiosInstance.get('empdetails/').then((res) => {
      setmydata(res.data)
      console.log(res.data)
      setloading(false)

    })
  }
  useEffect(() => {
    Getdata();
  }, []
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: 'first_name',
        header: 'First Name',
        size: 150,
      },

      {
        accessorKey: 'last_name',
        header: 'Last Name',
        size: 150,
      },

      {
        accessorKey: 'email', //normal accessorKey
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        size: 150,
      },
      {
        accessorKey: 'mobile_number',
        header: 'Mobile number ',
        size: 150,
      },
      {
        accessorKey: 'employement_type',
        header: 'Employeement Type',
        size: 150,
      },

    ],
    [],
  );



  return (
    <Navbar drawerWidth={250} content={
      <div>
        <Box sx={{ display: 'flex', marginBlockEnd: '0%', backgroundColor: '#2481ce', marginBottom: '1px',
           boxShadow: '0', justifyContent: 'space-around', marginLeft: '0%' }}>
          < ListItemButton sx={{ display: 'flex', marginLeft: '0px' }}  >
          <Typography sx={{ marginLeft: ' 5px', color: '#fff', flexGrow: '1',fontWeight:'bold',fontSize:'20px' }}>
            Employee Detaials Table
          </Typography>
          <Box  component={Link} to="/Emp_add" sx={{marginRight:'auto'}}>
            <ListItemIcon sx={{ display: 'flex' }} >
              <PersonAddAlt1OutlinedIcon sx={{ color: '#fff'}} />
            </ListItemIcon>
          </Box>
          </ListItemButton>
        </Box>

        
          {loading ? <p>loading data...<h1><progress>loading data</progress></h1>
          </p> :

            <MaterialReactTable

              enableRowActions
              positionActionsColumn="last"
              renderRowActions={({ row }) => (
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px',
                 marginRight: 'auto',justifyContent:'flex-end' }}>

                  <IconButton
                    color="secondary" component={Link} to={`edit/${row.original.id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error" component={Link} to={`delete/${row.original.id}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              )}
              columns={columns}
              data={mydata}
            />
          }
      </div>} />

  )
};

export default EmpDetails
