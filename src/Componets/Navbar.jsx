import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Mybutton from './form/Button'
import Toolbar from '@mui/material/Toolbar';
import Menu from './menu';
import ShortMenu from './shortmenu';
import Upload from './form/Imageupload';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Logout from './MainComponets/Logout';
import AccountMenu from './form/MyAccountFrorm';

const drawerWidth = 240;
const shortwidth = 80;
export default function Navbar({ content }) {
  const [isbigmenu, setsbigmenu] = useState(false);
  const changingmenu = () => {
    setsbigmenu(!isbigmenu)
  }


  return (
    <Box sx={{ display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: '', width: '100%', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton onClick={changingmenu} sx={{ marginRight: 5, color: 'white' }}>
            {isbigmenu ? <MenuIcon /> : <MenuOpenIcon />}
          </IconButton >
          <div sx={{ display: 'flex' }} >
            <Typography variant="h6" noWrap component="div" sx={{fontWeight:'bold',fontSize:'30px'}}>
               Employee Management System
            </Typography>
          </div>
          <div style={{ position: "absolute", top: "0", right: "0", margin: "0", }}>



            
            <AccountMenu/>
          




          </div>
        </Toolbar>

      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isbigmenu ? drawerWidth : shortwidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isbigmenu ? drawerWidth : shortwidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        {isbigmenu ? <Menu /> : <ShortMenu />}

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {content}

      </Box>
    </Box>
  );
}
