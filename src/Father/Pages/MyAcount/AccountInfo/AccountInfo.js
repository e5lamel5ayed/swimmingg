import React from 'react'
import { Link } from 'react-router-dom'

const AccountInfo = () => {
    return (
        <div>
            <div className='pt-4 mt-3'>
                <h3
                    style={{
                        borderRight: " 5px #004c6d solid",
                        paddingRight: " 11px",
                        borderRadius: "2px",
                        color: "#000",
                    }}
                > معلومات الحساب</h3>
            </div>
            <div className=" mt-4 bg-white all-account">
                <div className='py-4 mt-3'>
                    <h6
                        style={{
                            borderRight: " 5px #004c6d solid",
                            paddingRight: " 11px",
                            borderRadius: "2px",
                            color: "#000",
                        }}
                    >  سيد اسامة</h6>

                    <div className='mt-5 mb-4 px-4'>

                        <Link to='/editemail'>
                            <div className='d-flex  mb-2 account-info-location account-hover'>
                                <i className='fas fa-location-dot ml-2'></i>
                                <div>
                                    <p>سيد</p>
                                    <p>اسامة</p>
                                    <p>شرقية</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/editemail' className='text-decoration-underline'>
                            إضافة عنوان بريدي
                        </Link>
                    </div>

                    <div className='mt-5 mb-4 px-4'>
                        <Link to='/addemail'>
                            <div className='mb-2 account-hover'>
                                <i className='fa fa-envelope ml-2'></i>
                                <span>sayedosama@gmail.com</span>
                            </div>
                        </Link>
                        <Link to='/addemail' className='text-decoration-underline'>
                            اضافة بريد الكتروني
                        </Link>
                    </div>

                    <div className='mt-5 mb-4 px-4'>
                        <Link to='/editphone'>
                            <div className='account-hover'>
                                <i className='fa fa-phone ml-2'></i>
                                <span>01210304516</span>
                                <p className='text-danger font-italic mb-1'>
                                    غير مشترك
                                </p>
                            </div>
                        </Link>
                        <Link to='/editphone' className='text-decoration-underline'>
                            اضافة رقم هاتف
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AccountInfo