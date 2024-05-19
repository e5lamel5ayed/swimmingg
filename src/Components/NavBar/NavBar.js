import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { SidebarData } from '../SideBar/SideBarData';
import { Col } from 'react-bootstrap'

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className='' style={{ width: "100%" }} >
      <div className='nav-background'>

        <nav class=" navbar navbar-expand-lg navbar-light bg-transparent">

          <div className="navbar2 ml-5" >
            <Link className="menu_barss" >
              <MenuIcon className='menu_bars-menuIcon ' onClick={showSidebar} /> </Link><Link onClick={showSidebar}></Link>
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

          <div className='col-md-6 d-flex navtext'>
            <Link class="navbar-brand pl-5 text-white" to="/booking">حجز</Link>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link class="nav-link pl-5 text-white" to="/MyAcount">حسابي <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link pl-5 text-white" to="#">اخبار <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link pl-5 text-white" to="#">حسابي <span class="sr-only">(current)</span></Link>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle text-white" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    المزيد
                  </Link>
                  <div class="dropdown-menu">
                    <Link class="dropdown-item" to="#">Action</Link>
                    <Link class="dropdown-item" to="#">Another action</Link>
                    <Link class="dropdown-item" to="#">Something else here</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      </div>
    </div>
  )
}

export default NavBar