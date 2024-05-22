import { Button } from '@mui/material'
import React from 'react'
// import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ChangePassword = () => {
    return (
        <div>
            <div className="family mt-4 bg-white all-account pb-3">
                <div className=' pt-4'>
                    <h3
                        style={{
                            borderRight: " 5px #004c6d solid",
                            paddingRight: " 11px",
                            borderRadius: "2px",
                            color: "#000",
                        }}
                    >  تسجيل الدخول/ الامان </h3>
                </div>
                <div className=' mt-4 mb-5  '>
                    <Link to="/UpdatePassword">
                        <Button
                            style={{
                                backgroundColor: "rgb(237, 236, 236)",
                                color: "rgb(0, 0, 0)",
                                borderRadius: "32px",
                                width: "40%",
                                margin: "auto",
                                /* margin-left: auto; */
                                display: "block",
                            }}
                            className=' btn bun-block  mt-3 ' size="" color="primary">
                            تغيير كلمه اسر
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword