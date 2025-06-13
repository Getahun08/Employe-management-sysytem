
import * as React from 'react';
import Box from '@mui/material/Box';
import {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import AxiosInstance from '../Axiosinstance';
import { useState } from 'react';

export default function Visibility() {

const mypram=useParams()
const myId=mypram.id

const [mydata,setmydata]= useState()
const [loading,setloading]=useState(true)

const Getdata=()=>{
  AxiosInstance.get(`user/${myId}/`).then((res)=>{
    setmydata(res.data)
    console.log(res.data)
    setloading(false)

  })
}
  useEffect(()=>{
    Getdata();
  },[]
  );
  return (
    <div style={{ width: '100%' }}>
         {loading?<p>loading data...<h1><progress>loading data</progress></h1>
            </p>:
      <Box
        component="span"
        sx={(theme) => ({
          visibility: 'visible',
          my: 2,
          p: 1,
          bgcolor: 'grey.100',
          color: 'grey.800',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        })}
      >
    wellcome:{mydata.email}
      </Box>
}
      <Box
        component="span"
        sx={{ visibility: 'hidden', p: 1, m: 1, bgcolor: 'background.paper' }}
      >
        Invisible container
      </Box>
    </div>
  );
}
