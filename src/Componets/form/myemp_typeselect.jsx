import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'
export default function Myemp_typesector(props) {
    const { label, name, width, control } = props; 
  
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
              <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'full_time'}>Full_Time</MenuItem>
            <MenuItem value={'par_time'}>Par_Time</MenuItem>
            <MenuItem value={'contract'}>Contract</MenuItem>
            <MenuItem value={'filexble'}>Flexiable</MenuItem>
            </Select>
             <FormHelperText sx={{color:'red'}}>{error?.message}</FormHelperText>
             </FormControl>
          )}
        />
     
    );
  }
  