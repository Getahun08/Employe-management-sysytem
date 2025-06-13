import {React,useState} from 'react'
import '../App.css'
import { Box} from '@mui/material'
import Myemail from './form/Emilfrom'
import Passform from './form/Pass'
import Mybutton from './form/Button'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Mymessage from './form/Message'
import Navbar from './Navbar'
import {Typography} from '@mui/material'

function Register() {
  const Navigate=useNavigate()
  const [Showmessage,setShowmessage]=useState(false)

  const schema=yup.object({
    email: yup.string().email('field expects an email adress').required('email is requerd field')
              .matches(/@gmail.com||@gmail.com/,'email field must look like @gmail.com||@gmail.com format'),
    
    password:yup.string().required('password is requerd field'),
               
    password2:yup.string().required('password confirm is requierd field') 
                 .oneOf([yup.ref("password"),null],"password must match")         
    


  })
  const { handleSubmit, control } = useForm({resolver:yupResolver(schema)});

  const submission=(data)=>{
    AxiosInstance.post('register/',{
      email:data.email,
      password:data.password
  })
  .then((response)=>{
    console.log(response.status === 200)  
      Navigate('/Dashboard')
  })
  .catch((error)=>{
    setShowmessage(true)
    setTimeout(() => {
      setShowmessage(false);
      }, 6000);
  
    console.error('error during login',error)
  })
  }
  return (
    <Navbar drawerWidth={200} content={


             <>
      {Showmessage? <Mymessage text={'  check your emial is exist or your unAuthorized person'}
                severity={"error"}/>:null}
      <form onSubmit={handleSubmit(submission)}>
      <Box sx={{display:'flex',width:'100%',backgroundColor:'#2481ce',marginBottom:'10px',boxShadow:'1'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff'}}>
            Add new user
          </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%',gap: '2', padding:'2',flexDirection:"rows",boxShadow:'2'}}>

        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <Box sx={{marginBottom:'10px',marginLeft:'15px',marginTop:'10px'}}>
                   <Myemail 
                  label='Email'
                  width='95%'
                  name={"email"}
                  control={control}
                  />
                  
                </Box>

                <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>            
                    <Passform 
                  label='Password'
                  width='35%'
                  name={'password'}
                  control={control}
                  />
                  </Box>
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                  <Passform 
                  label='Confrm-Password'
                  width='35%'
                  name={'password2'}
                  control={control}
                  />
                </Box>
                
                  
                  <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <Mybutton
                  label='Register'
                  type={'submit'}
                  />
                
                </Box>

                </Box>
               </Box>
        
        
         </form>
        
    </>
  
    }/>
  )
}

export default Register
