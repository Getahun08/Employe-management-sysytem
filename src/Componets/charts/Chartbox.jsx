import * as React from 'react';
import { Grid,Box } from '@mui/material';
export default function Mypichartbox(props){
  const {icon1,Title1,chart1,Title2,icon2,chart2}=props
  return (
    <>
        <Grid container 
        sx={{width:'100%',display:'flex',minHeight:'200px',boxShadow:'3',justifyContent:'space-evenly'}}>

              <Grid
               sx={{width:'50%',minHeight:'200px',borderBlock:'2px'}}
              >
                 <Box sx={{marginBottom:'20px', marginTop:'20px',fontWeight:'bold',display:'flex',flexDirection:'row', alignItems:'center'}}>
                       <Box sx={{marginRight:'2px',marginLeft:'15px'}}>{icon1}</Box>
                       <Box>{Title1}</Box>
                 </Box>
                 <Box sx={{marginBottom:'20px'}} >{chart1}</Box>


              </Grid>


              <Grid 
               sx={{width:'40%',minHeight:'200px',padding:'2px'}}
               >
                   <Box sx={{marginBottom:'20px', marginTop:'20px',fontWeight:'bold',display:'flex',flexDirection:'row', alignItems:'center'}}>
                       <Box sx={{marginRight:'2px',marginLeft:'15px'}}>{icon2}</Box>
                       <Box>{Title2}</Box>
                 </Box>
                 <Box sx={{marginBottom:'20px'}} >{chart2}</Box>
              </Grid>

        </Grid>
    </>
  );
}