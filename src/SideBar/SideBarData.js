import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export const SidebarData = [
    {
        title: "مرحبا بك",
        path: "/",
        icon: <AccountCircleIcon />,
        cName: "nav-text"
    },
    {
        title: "الرئيسية",
        path: "/",
        cName: "nav-text"
    },
    {
        title: "ولي امر",
        path: "/Father",
        cName: "nav-text"
    },
    {
        title: "موظف",
        path: "/Emploee",
        cName: "nav-text"
    },
    {
        title: 'الاعدادت',
        path: '/setting',
        cName: 'nav-text nav-drop',
        subMenu: [
            {
                title: 'اضافة مكان',
                path: '/addPlace',
            },
            {
                title: 'اضافة حمام',
                path: '/addPath',
            },
            {
                title: 'اضافة كورس',
                path: '/addCourse',
            },
            {
                title: 'اضافة مدرب',
                path: '/addInstructor',
            },
            // {
            //     title: 'اضافة حارة',
            //     path: '/addLane',
            // },
        ]
    }]