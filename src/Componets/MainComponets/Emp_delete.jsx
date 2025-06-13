import { Box, Button, Select, Typography } from '@mui/material'
import {React,useState,useEffect} from 'react'
import '../../App.css';
import Mybutton from '../form/Button';
import Navbar from '../Navbar';

import { useNavigate ,useParams} from 'react-router-dom'
import AxiosInstance from '../Axiosinstance';



function Employe_delete() {
  const Navigate=useNavigate()
  

  const mypram=useParams()
  const myId=mypram.id

const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)
const Getdata=()=>{
  AxiosInstance.get(`empdetails/${myId}`).then((res)=>{
    setmydata(res.data)
    console.log(res.data)
    setloading(false)

  })
}
  useEffect(()=>{
    Getdata();
  },[]
  );


  const submission=(data)=>{
   
    AxiosInstance.delete(`empdetails/${myId}/`)
  .then((res)=>{
    Navigate('/EmployeDetails')
  })
  
  }
  return (
    <Navbar drawerWidth={200} content={
    <>
        {loading?<p>loading data...<h1><progress>loading data</progress></h1>
            </p>:
         <>
        <Box sx={{display:'flex',width:'100%',backgroundColor:'#2481ce',marginBottom:'10px',boxShadow:'1'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff'}}>
            Delete Employee: {mydata.first_name}
          </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%',gap: '2', padding:'2',flexDirection:"rows",boxShadow:'2'}}>
          
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                         <p>
                          Are you sure that you want to delete? :<strong>{mydata.first_name}</strong>
                          </p>
                  </Box>
                  
        </Box>
        <Box sx={{display:'flex',width:'100%',boxShadow:'0',justifyContent:'center', alignItems:'center',  padding:'4'}}>
                 <Box sx={{marginBottom:'10px',marginLeft:'40%',marginRight:'40%',boxShadow:'3',marginTop:'30px'
                          ,justifyContent:'center', alignItems:'center'}}>
                          < Button
                          variant='containd'sx={{
                            background:' linear-gradient(326deg,rgb(184, 6, 24) 34%, rgba(235, 7, 53, 1) 98%)'}}
                          onClick={submission} 
                          >
                            Delete
                          </Button>
                        
                 </Box>
      </Box>
      </>
        }
</>
    }/>
  )
}

export default Employe_delete

 