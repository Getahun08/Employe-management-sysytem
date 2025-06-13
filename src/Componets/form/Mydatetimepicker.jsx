
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {Controller} from 'react-hook-form'
import dayjs from "dayjs";

export default function MyDateTimePicker(props) {
  const {label,name,placeholder,width,control}=props

return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>

   <Controller
        name={name}
        control={control}
        render={({
          field:{onChange,value},
          fieldState:{error}
          
        })=>(
        <DateTimePicker  label={label} 
        sx={{width:{width}}}
        placeholder={placeholder}
        onChange={onChange}
       value={value }
       slotProps={{
        textField: {
          error: !!error,
          helperText: error?.message
        }
      }}
       />
          )}/>
    </DemoContainer>
    </LocalizationProvider>
  );
}

