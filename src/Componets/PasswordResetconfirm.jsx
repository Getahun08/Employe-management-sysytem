import React from 'react'
import '../App.css'
import { Box} from '@mui/material'
import { useState,useEffect,useMemo } from 'react'
import Passform from './form/Pass'
import Mybutton from './form/Button'
import { useNavigate,useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from './Axiosinstance'
import Mymessage from './form/Message'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

function PasswordResetconfirm() {
  
    const Navigate=useNavigate()
    const schema=yup.object({
      
      
      password:yup.string().required('password is requerd field')
                  .min(8,'password must have at least 8 characters')
                  .matches(/[A-Z]/,'password field must contain at least one upercase later')
                  .matches(/[a-z]/,'password field must contain at least one lower case leter')
                  .matches(/[0-9]/,'password field must contain at least one number')
                  .matches(/[~!@#$%^&*()_{}+:;]/,'password field must contain at least one specail character'),
      password2:yup.string().required('password confirm is requierd field') 
                   .oneOf([yup.ref("password"),null],"password must match")         
      
  
  
    })
    const { handleSubmit, control } = useForm({resolver:yupResolver(schema)});
    const {token}=useParams()
    console.log(token)

    const [Showmessage,setShowmessage]=useState(false)
    const submission=(data)=>{
      AxiosInstance.post('api/password_reset/confirm/',{
        password:data.password,
        token:token,
      
    })
    .then((response)=>{
      setShowmessage(true)
      setTimeout(()=>{
        Navigate('/')
      } ,6000)
    })
    
    }
    return (
      <div className={'background'}>
         {Showmessage? <Mymessage text={'  your account  is created or reseted  successfully '}
                severity={"success"}/>:null}
              <form onSubmit={handleSubmit(submission)}>
              
           <Box className={'whitbox'}>
                  <Box className="items">
                    <Box className="title">Create or Reset password </Box>
                  </Box>
                  <Box className="items">
                  <Passform 
                    label='Password'
                    name={'password'}
                    control={control}
                    />
                    </Box>
                    <Box className="items">
                  <Passform 
                    label='Confrm Password'
                    name={'password2'}
                    control={control}
                    />
                  </Box>
            
                  <Box className="items">
                    <Mybutton
                    label='Create or Reset password '
                    type={'submit'}
  
                    />
                    
                  </Box>
                  <Box className="items" sx={{flexDirection:'column'}}>
                    
                  </Box>
  
           </Box>
           </form >
  
      </div>
  
    )
 
}

export default PasswordResetconfirm