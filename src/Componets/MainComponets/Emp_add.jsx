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
import dayjs from 'dayjs';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import Navbar from '../Navbar';

function Employe_add() {

  const [Departement,setDeparttement]= useState()
  const [Showmessage,setShowmessage]=useState(false)
  const [loading,setloading]=useState(true) 
  const Options=[
   {id:'',name_of_departement:'None'},
   {id:'male',name_of_departement:'male'},
   {id:'female',name_of_departement:'Female'},
   {id:'others',name_of_departement:'Others'}
  ]
 
  const Getdata=()=>{
  AxiosInstance.get('departement/').then((res)=>{
    setDeparttement(res.data)
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
    first_name:'',
      middle_name:'',
      last_name:'',
      email:'',
      
      gender:'',
      mobile_number:'',
      employement_type:'',
    
 }
 const today=new Date()
 const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
 const schema=yup.object({
  first_name: yup.string().required('firt name  is requerd field'),
  middle_name: yup.string().required('middle name  is requerd field'),
  last_name: yup.string().required('last name  is requerd field'),
  email: yup.string().email('field expects an email adress').required('email is requerd field')
            .matches(/@gmail.com||@gmail.com/,'email field must look like @gmail.com||@gmail.com format'),
  gender:yup.string().required('gender is requerd field'),        
  mobile_number:yup.string()
  .required('Mobile number is required')
  .matches(/^(0|00|\+251)/, 'Mobile number must start with 0, 00, or +251')
  .min(10, 'Mobile number must have at least 10 digits')
  .max(15, 'Mobile number must not exceed 15 digits'),
  employement_type: yup.string()
             .required('Employment type is required'),

  date_of_birth: yup.date()
                   .required('birth date is required')
                    .min(new Date(1930, 0, 1), 'birth date must be after 1930')
                  .max(today, 'birth date cannot be in the future')
                         .test(
                                'is-18-or-older',
                               'You are under 18 years old',
                              (value) => value && value <= eighteenYearsAgo
  ),

  start_date: yup.date()
           .required('Start date is required')
           .min(new Date(1960, 0, 1), 'Start date must be after 1960')
           .max(new Date(), 'Start date cannot be in the future'),
   departements: yup.string().required('departement field  is requerd field'),


})

  const { handleSubmit, control } = useForm({defaultValues:defaultValues,resolver:yupResolver(schema)});
  const submission=(data)=>{
    const Date_of_birth = dayjs(data.date_of_birth).format("YYYY-MM-DD");
    const Start_date= dayjs(data.start_date).format("YYYY-MM-DD HH:mm:ss")
    
    AxiosInstance.post('empdetails/',{
      
      first_name:data.first_name,
      middle_name:data.middle_name,
      last_name:data.last_name,
      email:data.email,
      date_of_birth:Date_of_birth,
      gender:data.gender,
      mobile_number:data.mobile_number,
      employement_type:data.employement_type,
      start_date:Start_date,
      departements:data.departements

  })
  .then((response)=>{
    console.log(response)
    Navigate('/EmployeDetails')
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
            Add new Employee
          </Typography>
        </Box>
        <Box sx={{display:'flex',width:'100%',gap: '2', padding:'2',flexDirection:"rows",boxShadow:'2'}}>
          
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{marginBottom:'10px',marginLeft:'15px',marginTop:'10px'
                  }}>
                   <Myemail
                   label='Frist_Name'
                   width='95%'
                   name={"first_name"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                  <Myemail
                   label='Middle_name'
                   width='95%'
                   name={"middle_name"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                  <Myemail
                   label='Last_name'
                   width='95%'
                   name={"last_name"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                  <Myemail
                   label='Email'
                   width='95%'
                   name={"email"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'15px'}}>
                   <Myemail
                   label='Mobile number'
                   width='95%'  
                   name={"mobile_number"}
                   control={control}/>
                   </Box>
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px',marginTop:'10px'}}>
                     <Mygendersector
                   label='Gender'
                   width='85%'
                   name={"gender"}
                   options={Options}

                   control={control}
                 />
                   
                   </Box>
                  <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <MyDatePicker
                   label='Date of Birth'
                   width='85%'
                   name={"date_of_birth"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <Myemp_typesector
                   label='Employement_Type'
                   width='85%'
                   name={"employement_type"}
                  
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10%'}}>
                  <MyDateTimePicker
                   label='Start_Date'
                   width='95%'
                   name={"start_date"}
                   control={control}/>
                   </Box>
                   <Box sx={{marginBottom:'10px',marginLeft:'25px',marginRight:'10px'}}>
                  <Mygendersector
                   label='Departements'
                   width='85%'
                   name={"departements"}
                   options={Departement}
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

export default Employe_add

 