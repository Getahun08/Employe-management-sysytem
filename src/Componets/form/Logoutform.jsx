import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Mylogout=({color,text})=>{
  return (
    <Stack direction="row" spacing={2}>
      <Button variant='outlined'color={color}>
        {text}
      </Button>
    </Stack>
  );
}
export default Mylogout