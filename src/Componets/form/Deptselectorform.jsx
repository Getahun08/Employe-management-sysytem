import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText';


export default function MYemployeselector(props) {
  const { label, name, width, options,control } = props; 

  return (
    

      <Controller
        name={name || 'defaultName'}
        control={control}
        render={({ field: { onChange, value } ,fieldState:{error}}) => (
          <FormControl variant="standard" sx={{ width }}>
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={onChange}
            value={value}
            error={!!error}
          >
            {  options.map((option) =>(
           <MenuItem value={option.id}> {option.first_name} </MenuItem>
                                 

              ))
              }
          </Select>

          <FormHelperText sx={{color:'red'}}>{error?.message}</FormHelperText>
          </FormControl>
        )}
      />
   
  );
}
