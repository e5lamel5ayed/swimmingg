import React from 'react'

const Payment = () => {
    return (
        <div>
            <div className="container mt-4 bg-white payment">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='p-3'>الدفع</h2>
                    </div>

                    <div className='col-md-6 text-center mb-3 payment-caption'>
                        <h5>0.00 جنية</h5>
                        <p>بطاقة ائتمان</p>
                        <button className='payment-btn btn btn-block'>اتمام الدفع</button>
                    </div>

                    <div className='col-md-6 text-center mb-3 payment-caption'>
                        <h5>0.00 جنية</h5>
                        <p>بطاقة ائتمان</p>
                        <button className='payment-btn btn btn-block'>اتمام الدفع</button>
                    </div>

                    <div className="col-md-12 mt-5">
                        <h5>معلومات الدفع المخزنة</h5>
                    </div>

                    <div className='border text-center m-auto px-5 py-3 my-5 payment-border'>
                        <button className='border-none d-block m-auto'><i className='fas fa-plus text-muted'></i></button>
                        <span>إضافة طريقة دفع</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment