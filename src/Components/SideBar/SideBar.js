import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from './SideBarData';
import { Col } from 'react-bootstrap'
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <Col lg={12} md={12} sm={12} className="header2">
        <div className="navbar2" >
          <Link className="menu_barss" >
            <MenuIcon className='menu_bars-menuIcon' onClick={showSidebar} /> </Link><Link onClick={showSidebar}></Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-atems' >
            <li className='navbar-toggle' onClick={showSidebar} >
              <Link className='menu-bars' >
                <CloseIcon />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}   >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            }
            )}
          </ul>
        </nav>
      </Col>
    </>
  )
}

export default Navbar