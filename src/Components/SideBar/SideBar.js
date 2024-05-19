import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './SideBarData';
import { Col } from 'react-bootstrap'
import NavBar from '../NavBar/NavBar';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <div>
      
    </div>
      
    </>
  )
}

export default Navbar