import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function My_discription(props) {
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
          id="standard-multiline-static"
          label={label}
          onChange={onChange || (() => {})}
          value={value }
          error={!!error}
      helperText={error?.message}
          multiline
          rows={4}
          sx={{width:{width}}}
          variant="standard"
          placeholder={placeholder}
        />
          )}
          />
  );
}
