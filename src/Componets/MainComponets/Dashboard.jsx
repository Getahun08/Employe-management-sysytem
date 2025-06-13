import React from 'react'

import { Box } from '@mui/material'
import {Typography} from '@mui/material';
import {IconButton} from '@mui/material';
import { Link } from 'react-router-dom';
import {ListItemButton} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import AxiosInstance from '../Axiosinstance'
import { useState,useEffect } from 'react'
import Navbar from '../Navbar'
import Pichart from '../charts/picharts'
import WcIcon from '@mui/icons-material/Wc';
import Mypichartbox from '../charts/Chartbox'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
export default function Dashboard() {
    const [mydata1,setmydata1]= useState([])
    console.log('maydata',mydata1)
    //  const [loading,setloading]=useState(true)
    const Getdata=()=>{
      AxiosInstance.get('genderdata/').then((res)=>{
        setmydata1(res.data)
        console.log(res.data)
        // setloading(false)
      })
    }
    useEffect(()=>{
      Getdata();
    },[]
    );
    const [mydata2,setmydata2]= useState([])
    console.log('maydata',mydata2)
    // const [loading,setloading]=useState(true)
    const Getdata2=()=>{
      AxiosInstance.get('emp_type/').then((res)=>{
        setmydata2(res.data)
        console.log(res.data)
        
    
      })
    }
    useEffect(()=>{
      Getdata2();
    },[]
    );
  return (
        <Navbar drawerWidth={250} content={
    <>
    <Box sx={{ display: 'flex', marginBlockEnd: '0%', backgroundColor: '#2481ce', marginBottom: '1px',
           boxShadow: '0', justifyContent: 'space-around', marginLeft: '0%' }}>
          < ListItemButton sx={{ display: 'flex', marginLeft: '0px' }}  >
          <Typography sx={{ marginLeft: ' 5px', color: '#fff', flexGrow: '1',fontWeight:'bold',fontSize:'20px' }}>
            Dashboard
          </Typography>
          </ListItemButton>
          </Box>
    <div>

        <Mypichartbox
        icon1={<WcIcon/>}
        Title1={'GENDER'}
        chart1={<Pichart
        mydata ={mydata1}
        />}
        icon2={<HistoryEduIcon/>}
        Title2={'Employeement Type'}
        chart2={<Pichart
          mydata ={mydata2}
          />}
        />
        
    </div>
        
    </>
        }/>
  )
}
