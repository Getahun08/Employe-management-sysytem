import * as React from 'react';
import Button from '@mui/material/Button';

export default function Mybutton(props) {
    const {label,type}= props
  return (
      <Button type={type}variant="contained" className='form1' 
      >{label}
      </Button>

  );
}
