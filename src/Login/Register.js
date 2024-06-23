import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import NavBarFather from '../Father/Components/NavBar/NavBarFather';
const Register = () => {
  return (
    <div>
      <NavBarFather />

      <div className='title-class d-flex justify-content-between align-items-center'>
        <div className='col-md-4 d-flex justify-content-between align-items-center' style={{ alignItems: "center" }} >
          <Link to="/">
            <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
          </Link>
        </div>

        <div className='col-md-7 ml-1 d-flex justify-content-between align-items-center' style={{ justifyContent: "flex-start" }}>
          <h2 className='text-center text-white mr-5'>التسجيل</h2>
        </div>
      </div>

      <div className="add-student">
        <div className="container">
          <div className="row">
            <div className="col-md-9 m-auto">
              <form action="/choosestudent" className=' mt-5'>

                <div className='mb-5 p-3 special-info bg-white'>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">الاسم الاول</label>
                    <input type="text" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">  الاسم الثاني</label>
                    <input type="text" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">الايميل</label>
                    <input type="email" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">تاريخ الميلاد</label>
                    <input type="date" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">رقم الهاتف</label>
                    <input type="tel" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">الرقم السري</label>
                    <input type="password" className="form-control w-75" />
                  </div>

                  <div className="form-group d-flex justify-content-between align-items-center">
                    <label htmlFor="">تاكيد الرقم السري</label>
                    <input type="password" className="form-control w-75" />
                  </div>

                  <div class="form-group d-flex">
                    <label htmlFor="" className='ml-5 gender'>النوع</label>
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <input type="radio" className='ml-2' value='male' name='gender' /> ذكر
                        <input type="radio" className='mr-2 ml-2' value='female' name='gender' /> انثى
                      </div>
                    </div>
                  </div>

                </div>

                <div className='add-student-btn d-flex justify-content-end align-items-center my-5 '>
                  <button className='btn ml-2 mb-3 w-100 btn-edit'>تسجيل</button>
                  <button className='btn w-100  mb-3 btn-edit2'>الغاء</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register