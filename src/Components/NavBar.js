import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      <div className="navbar2" >
        <Link className="menu_barss" >
          <MenuIcon className='menu_bars-menuIcon' onClick={showSidebar} />  </Link><Link onClick={showSidebar} className='all'>ALL</Link>
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
    </div>
  )
}

export default NavBar