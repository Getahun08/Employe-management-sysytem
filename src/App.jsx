import { useState } from 'react'

import './App.css'
import All from './Componets/MainComponets/All'
import Login from './Componets/Login'
import Register from './Componets/Register'
import Logout from './Componets/MainComponets/Logout'
import { Route, Routes ,useLocation} from 'react-router-dom'
import Navbar from './Componets/Navbar'
import ProtectedRoute from './Componets/ProtectedRouter'
import AccountMenu from './Componets/form/MyAccountFrorm'
import PasswordResetRequeast from './Componets/PasswordResetRequeast'
import PasswordResetconfirm from './Componets/PasswordResetconfirm'
import EmpDetails from './Componets/MainComponets/EmployeDetails'
import Employe_add from'./Componets/MainComponets/Emp_add'
import EmpEdit from'./Componets/MainComponets/Emp_update'
import Employe_delete from './Componets/MainComponets/Emp_delete'
import Visibility from './Componets/form/Mydisplay'
import Departement_add from './Componets/MainComponets/Depi_add'
import DeptDetails from './Componets/MainComponets/DepartementDetails'
import Dept_delete from './Componets/MainComponets/Dept_delete'
import DeptEdit from './Componets/MainComponets/Dept_update'
import { Navigate } from 'react-router-dom'
import Userview from './Componets/MainComponets/USersview'
import NotFound from './Componets/MainComponets/NotFound'
import Dashboard from './Componets/MainComponets/Dashboard'

function App() {
const location= useLocation()
const token=localStorage.getItem('Token')
  return (
   
  <Routes>
    <Route path="/" element={!token ? <Login/> : <Navigate to = "/Dashboard"/>} />
    <Route path="/Register" element={token ? <Register/> : <Navigate to = "/"/>} />

    <Route path="/all" element={token ? <All/> : <Navigate to = "/"/>} />
    <Route path="/user/:id" element={token ? <Userview/> : <Navigate to = "/"/>} />

    <Route path="/EmployeDetails" element={token ? <EmpDetails/> : <Navigate to = "/"/>} />
    <Route path="/Dashboard" element={token ? <Dashboard/> : <Navigate to = "/"/>} />
    <Route path="/Emp_add" element={token ? <Employe_add/> : <Navigate to = "/"/>} />
    <Route path="/EmployeDetails/edit/:id" element={token ? <EmpEdit/> : <Navigate to = "/"/>} />
    <Route path="/EmployeDetails/delete/:id" element={token ? <Employe_delete/> : <Navigate to = "/"/>} />

    <Route path="/Departement" element={token ? <DeptDetails/> : <Navigate to = "/"/>} />
    <Route path="/Departement_add" element={token ? <Departement_add/> : <Navigate to = "/"/>} />
    <Route path="/Departement/delete/:id" element={token ? <Dept_delete/> : <Navigate to = "/"/>} />
    <Route path="/Departement/edit/:id" element={token ? <DeptEdit/> : <Navigate to = "/"/>} />
    <Route path='/logout'  element={token ? <Logout/> : <Navigate to = "/"/>} />
    <Route path="/request/Password_reset" element={<PasswordResetRequeast/>}/>
    <Route path="/Password-reset/:token/" element={<PasswordResetconfirm/>}/>

    <Route path="/request/Password_reset" element={<PasswordResetRequeast/>}/>
    <Route path="/Password-reset/:token/" element={<PasswordResetconfirm/>}/>
   <Route path='/logout'  element={token ? <Logout/> : <Navigate to = "/"/>} />
   <Route path='/*'  element={<NotFound/>}/>
  </Routes>
  )
}

export default App
