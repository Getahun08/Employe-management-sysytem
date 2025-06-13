import * as React from 'react';
import TextField from '@mui/material/TextField';
import'../../App.css'
import {Controller} from 'react-hook-form'
export default function Myemail(props) {
    const {label,name,placeholder,width,control}=props
  return (
    
    <Controller
      name={name}
      control={control}
      render={({
        field:{onChange,value},
        fieldState:{error},
        formState,
      })=>(
      <TextField 
      id="outlined-basic" 
      sx={{width:{width}}}
      onChange={onChange || (() => {})}
      value={value }
      label= {label} 
      variant="outlined"
      error={!!error}
      helperText={error?.message}
      className='form' 
      placeholder={placeholder}
      />
  )}

    
    
    />
      
  );
}
