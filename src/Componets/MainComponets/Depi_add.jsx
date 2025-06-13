import { Box, Select, Typography } from '@mui/material'
import {React,useState,useEffect} from 'react'
import '../../App.css';
import Mybutton from '../form/Button';
import Myemail from '../form/Emilfrom';
import MyDateTimePicker from '../form/Mydatetimepicker'
import MyDatePicker from '../form/Mydatepiker';
import Mygendersector from '../form/myselect';
import Myemp_typesector from '../form/myemp_typeselect';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AxiosInstance from '../Axiosinstance';
import Mymessage from '../form/Message';
import My_discription from '../form/mydicription';
import MYemployeselector from '../form/Deptselectorform';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Navbar from '../Navbar';

function Departement_add() {

  const [Employe,setEmploye]= useState()
  const [Showmessage,setShowmessage]=useState(false)
  const [loading,setloading]=useState(true) 
 
  
  const Getdata=()=>{
  AxiosInstance.get('empdetails/').then((res)=>{
    setEmploye(res.data)
    console.log(res.data)
    setloading(false)

  })
}
useEffect(()=>{
  Getdata();
},[]
)

  const Navigate=useNavigate()

  const defaultValues={
    name_of_departement:'',
    departement_code:'',
    description:'',
    departement_head:'',
    
    
 }
 const schema=yup.object({
    name_of_departement: yup.string().required(' name_of_departement  is requerd field'),
  
    departement_code: yup.string()
            .required(' departement_code is required')
             .min(3, 'departement_code  must have at least 3 digits'),

    description: yup.string(),
             

 


})

  const { handleSubmit, control } = useForm({defaultValues:defaultValues,resolver:yupResolver(schema)});
  const submission=(data)=>{
   
    AxiosInstance.post('departement/',{
      
        name_of_departement:data.name_of_departement,
        departement_code:data.departement_code,
        description:data.description,
        departement_head:data.departement_head,
     

  })
  .then((response)=>{
    console.log(response)
    Navigate('/Departement')
  })
  .catch((error) => {
    console.error('Error during submission:', error);
    
    setShowmessage(true); 
    setTimeout(() => {
      setShowmessage(false);
    }, 6000);
});

      }
  return (
    <Navbar drawerWidth={200} content={
    <>
    {Showmessage? <Mymessage text={' error check and submit again'}
                    severity={"error"}/>:null}
              <>     
                    {loading?<p>loading data...<h1><progress>loading data</progress></h1>
      </p>:   
      <>       
     <form onSubmit={handleSubmit(submission)}>
        <Box sx={{display:'flex',width:'100%',backgroundColor:'#2481ce',marginBottom:'10px',boxShadow:'1'}}>
          <Typography sx={{marginLeft:'20px',color:'#fff'}}>
            Add new Departement
          </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%',gap: '2', padding:'2',flexDirection:"rows",boxShadow:'2'}}>
          
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{marginBottom:'10px',marginLeft:'15px',marginTop:'10px'}}>
                   <Myemail
                   label='Departement Name'
                   width='95%'
                   name={"name_of_departement"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                  <Myemail
                   label='Departement Code'
                   width='95%'
                   name={"departement_code"}
                   control={control}/>
                   </Box>
                  
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <My_discription
                   label='Description'
                   width='85%'
                   name={"description"}
                   control={control}/>
                   </Box>
                   
                   <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <MYemployeselector
                   label='Departement Head'
                   width='85%'
                   name={"departement_head"}
                   options={Employe}
                   control={control}/>
                   </Box>
                  </Box>

                
                  
        </Box>
        <Box sx={{display:'flex',width:'100%',boxShadow:'0',justifyContent:'center', alignItems:'center',
          padding:'4'}}>
        <Box sx={{marginBottom:'10px',marginLeft:'40%',marginRight:'40%',boxShadow:'3',marginTop:'30px'
          ,justifyContent:'center', alignItems:'center'}}>
                          <Mybutton
                          label='Submit'
                          type={'submit'}
                          />
                        
         </Box>
      </Box>
      </form>
      </>
                }
                </>
      </>
    }/>
        )
};

export default Departement_add

 