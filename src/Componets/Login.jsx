import {React,useState} from 'react'
import '../App.css'
import { Avatar, Box} from '@mui/material'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Myemail from './form/Emilfrom'
import Passform from './form/Pass'
import Mybutton from './form/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import Mymessage from './form/Message'

function Login() {
  const Navigate=useNavigate()
  const [Showmessage,setShowmessage]=useState(false)
  const schema=yup.object({
    email: yup.string().email('field expects an email adress').required('email is requerd field')
              .matches(/@gmail.com||@gmail.com/,'email field must look like @gmail.com||@gmail.com format'),
    
    password:yup.string().required('password is requerd field'),
               
          
    


  })
  const { handleSubmit, control } = useForm({resolver:yupResolver(schema)});
  const submission=(data)=>{
    AxiosInstance.post('login/',{
      email:data.email,
      password:data.password
  })
  .then((response)=>{
    console.log(response)
    localStorage.setItem('Token',response.data.token)
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
    <div className={'background'}>
               {Showmessage? <Mymessage text={'  check your  email and password is that correct? or Reset ur yopassord'}
                severity={"error"}/>:null}

            <form onSubmit={handleSubmit(submission)}>

         <Box className={'whitbox'}>
                       <Box  className="items">
                       <Avatar sx={{ width: '70px', height: '70px', color: 'rgba(29, 24, 245, 0.85)'}} />

                       </Box>
                <Box className="items">
                  <Box className="title1"> Login</Box>
                </Box>

                <Box className="items">
                  <Myemail 
                  label='Email'
                  name={"email"}
                  control={control}
                  />
                  
                </Box>

                <Box className="items">
                <Passform 
                  label='Password'
                  name={"password"}
                  control={control}
                  />
                </Box>
                <Box className="items">
                  <Mybutton
                  label='login'
                  type={'submit'}

                  />
                </Box>
                <Box className="items" >
    
                  <Link to="/request/Password_reset">
                      Create or Reset Acount!click here
                  </Link>
                </Box>

         </Box>
         </form >

    </div>

  )
}

export default Login
