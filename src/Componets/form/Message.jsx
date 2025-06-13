import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

  const Mymessage=({text,severity})=>{
  return (
    <Stack sx={{ width: '100%' ,position:'absolute',top:'20px',justifyContent:'center',alignItems:'center'}} spacing={1}>
      <Alert  severity={severity}>
        {text}
              </Alert>
      </Stack>
      
  );
}
export default Mymessage