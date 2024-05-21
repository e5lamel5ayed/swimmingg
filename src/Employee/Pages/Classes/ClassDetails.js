import React from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ClassDetails = () => {
    return (
        <div>
            <NavBar />

            <div className='title-class d-flex'>
                <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                    <Link to="/Allclasses">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>
                <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>تفاصيل الصف</h2>
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-white'>مجموعة الوالدين وتوت 1 - هوليداي إن إكسبريس - ليثبريدج - AB (Sun Morn #3)</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassDetails