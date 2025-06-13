import React from 'react'
import'../../App.css'
import { Link } from 'react-router-dom'
import { Box} from '@mui/material'
import { FormatAlignJustify } from '@mui/icons-material'

export default function NotFound() {
  return (
    <div className='text-center'> 
    <div className='title'sx={{flexDirection:'column',FormatAlignJustify:'center'}}>
      404! not found
      
      </div>
  
    </div>
  )
}
