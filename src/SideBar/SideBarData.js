import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const SidebarData = [
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
    {
        title: 'الاعدادت',
        path: '/setting',
        icon: <SettingsIcon className='ml-3' />,
        cName: 'nav-text nav-drop',
        subMenu: [
            {
                title: 'اضافة مكان',
                icon: <AddIcon className='ml-3' />,
                path: '/addPlace',
            },
            {
                title: 'اضافة حمام',
                icon: <AddIcon className='ml-3' />,
                path: '/addPath',
            },
            {
                title: 'اضافة برنامج',
                icon: <AddIcon className='ml-3' />,
                path: '/addProgram',
            },
            {
                title: 'اضافة مدرب',
                icon: <AddIcon className='ml-3' />,
                path: '/addInstructor',
            },
            {
                title: 'جدول الاسبوع',
                icon: <CalendarMonthIcon className='ml-3' />,
                path: '/WeekTable',
            },
            {
                title: 'جدول اليوم',
                icon: <CalendarMonthIcon className='ml-3' />,
                path: '/DayTable',
            },
        ]
    }]