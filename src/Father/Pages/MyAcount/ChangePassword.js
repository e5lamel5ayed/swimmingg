import { Button } from '@mui/material'
import React from 'react'

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
                <div className='col-md-12 mt-4 mb-5 d-flex  justify-content-center '>

                    <Button
                        style={{
                            backgroundColor: "rgb(237 236 236)",
                            color: "rgb(0, 0, 0)",
                            borderRadius: "32px",
                        }}
                        className='btn w-50  mt-3 ' size="" color="primary">
                        تغيير كلمه اسر
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword