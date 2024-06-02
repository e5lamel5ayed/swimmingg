import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export const SidebarDataFather = [
    {
        title: "مرحبا بك",
        path: "/",
        icon: <AccountCircleIcon className='ml-3' />,
        cName: "nav-text"
    },
    {
        title: "الرئيسية",
        path: "/",
        icon: <HomeIcon className='ml-3' />,
        cName: "nav-text"
    },
    {
        title: "ولي امر",
        path: "/Father",
        icon: <PersonIcon className='ml-3' />,
        cName: "nav-text"
    },
    {
        title: "موظف",
        path: "/Emploee",
        icon: <AdminPanelSettingsIcon className='ml-3' />,
        cName: "nav-text"
    },



]