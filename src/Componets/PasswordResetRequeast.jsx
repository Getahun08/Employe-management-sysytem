import React from 'react'
import '../App.css'
import { Box} from '@mui/material'
import { useState,useEffect,useMemo } from 'react'
import Passform from './form/Pass'
import Myemail from './form/Emilfrom'
import Mybutton from './form/Button'
import { useNavigate, } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import Mymessage from './form/Message'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

function PasswordResetRequeast() {
  
    const Navigate=useNavigate()
    const schema=yup.object({
      email: yup.string().email('field expects an email adress').required('email is requerd field')
                .matches(/@gmail.com||@gmail.com/,'email field must look like @gmail.com||@gmail.com format')
    });
    const { handleSubmit, control } = useForm({resolver:yupResolver(schema)})
    

    const [Showmessage,setShowmessage]=useState(false)
    const submission=(data)=>{
      AxiosInstance.post('api/password_reset/',{
        email:data.email,
      
    })
    .then((response)=>{
      setShowmessage(true)
      setTimeout(()=>{
        setShowmessage(false)
        Navigate('/')
        localStorage.removeItem('Token');
        window.location.reload();
      } ,6000)
    })
    
    }
    return (
      <div className={'background'}>
         {Showmessage? <Mymessage text={' if your email is exists you will have get a message your on your email with an instruction.chack your Email'}/>:null}
              <form onSubmit={handleSubmit(submission)}>
              
           <Box className={'whitbox'}>
                  <Box className="items">
                    <Box className="title"> New password or Reset password Request </Box>
                  </Box>
                  <Box className="items">
                      <Myemail 
                          label='Email'
                           name={"email"}
                          control={control}
                     />
                    </Box>
            
                  <Box className="items">
                    <Mybutton
                    label='Create or Reset Request'
                    type={'submit'}
  
                    />
                    
                  </Box>
                  <Box className="items" sx={{flexDirection:'column'}}>
                     <Link to="/">
                                   Go to login 
                                  </Link>
                  </Box>
  
           </Box> 
           </form >
  
      </div>
  
    )
 
}

export default PasswordResetRequeast
