import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FamilyCustomFields = () => {
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
                    > الحقول المخصصه للعائلة</h3>
                </div>
                <div className='col-md-12 mt-4 mb-5'>
                    <Link to='/UpdateFamily'>
                        <Button className='text-black w-100 d-flex  justify-content-start p-4'>
                            تم اضافتك من قبل من ؟(الاسم الاول /الاسم الاخير)
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default FamilyCustomFields