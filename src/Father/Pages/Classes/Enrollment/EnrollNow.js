import React from 'react'
import NavBar from '../../../Components/NavBar/NavBarFather';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const EnrollNow = () => {
    return (
        <div>

            <NavBar />

            <div className='title-class d-flex'>
                <div className='col-md-5 d-flex' style={{ alignItems: "center" }} >
                    <Link to="/AllclassesFather">
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "38px" }} />
                    </Link>
                </div>
                <div className='col-md-7 ml-1 d-flex' style={{ justifyContent: "flex-start" }}>
                    <h2 className='text-center text-white mr-5'>حجز الصف</h2>
                </div>
            </div>

            <div className='py-4 bg-white'>
                <div className=''>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12">
                                <h3 className='text-dark'>مجموعة 1 - هوليداي إن إكسبريس - ليثبريدج</h3>
                                <form action="/choosestudent">
                                    <div className="form-group text-dark mt-5">
                                        <label htmlFor="class">الجلسات : </label>
                                        <select name="class" className='form-control'>
                                            <option value="class">
                                                صيف 2024 (1 يوليو 2024 - 25 أغسطس 2024) (مفتوح)
                                            </option>
                                        </select>
                                    </div>
                                    <hr className='my-5 details-hr' />
                                    <Link to="/NewEnroll">
                                        <button type="submit" className='btn m-auto d-block w-50 select-student-btn fw-bold text-dark'>تسجيل الآن </button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* start details  */}
                    <div className='details-title'>
                        <h4 className='mt-5'>details</h4>
                    </div>
                    <div className='details py-5'>
                        <div className="container">
                            <div className="row">
                                <div className="table-responsive text-center">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">الجدول</th>
                                                <th scope="col">المدربين</th>
                                                <th scope="col">البرنامج</th>
                                                <th scope="col">الحمام</th>
                                                <th scope="col">الحاره</th>
                                                <th scope="col">المستوي</th>
                                                <th scope="col">التكلفة</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>الاحد | 9.00 - 9.00صباحا<br />الثلاثاء | 10.00 - 11.00صباحا<br />الخميس | 1.00 - 2.00مساءا<br />السبت | 3.00 - 4.00مساءا</td>
                                                <td>اسلام السيد</td>
                                                <td>برنامج السباحة</td>
                                                <td> حمام 1</td>
                                                <td> حاره 2</td>
                                                <td>مبتدى</td>
                                                <td>200.00 جنية</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className='description-details mt-5'>

                                    <p className='fw-bold'>الوصف</p>

                                    <p>انطلق في رحلة سباحة شخصية مع مجموعة أولياء الأمور ودروس الأطفال في مدرسة K&K Swim School ، المصممة خصيصا للسباحين الذين تتراوح أعمارهم بين 5 و 12 شهرا. هذه الجلسات الأسبوعية التي تستغرق 30 دقيقة تفعل أكثر من مجرد تعليم السباحة. نحن نرعى علاقة خاصة بين السباح والماء. تصبح مساحة حمام السباحة المشتركة لدينا بيئة يتم فيها بناء الثقة وتبني التحديات ، كل ذلك تحت إشراف مدربينا المتحمسين.</p>

                                    <p className='my-2'>في دروس الوالدين والطلاب الجماعية ، نمكنك من أن تصبح أول مدرب سباحة لطفلك. هذه الجلسات ليست فقط حول دعم طفلك. إنهم يشاركون بنشاط في رحلة السباحة الخاصة بهم. مع نسبة 3 إلى 1 من الأطفال إلى المدربين ، نوجهك أنت وطفلك الصغير إلى هذه البيئة الجديدة ، مما يضمن لك الشعور بالثقة والاتصال في الماء.</p>

                                    <p>تمثل كل انطلاقة رحلة نمو ، حيث يتكيف منهجنا الفريد مع وتيرتك ، مما يضمن أن يجد كل متعلم طريقه الخاص لنجاح السباحة. من التحكم في التنفس للمبتدئين والانغماس إلى إتقان السكتات الدماغية المتقدمة ، فإن دروسنا مليئة بقيمنا الأساسية: التواصل والثقة والتحدي والنمو والإلهام. مع الالتزام بالاهتمام الشخصي ، نحتفل بكل معلم ، كبيرا كان أم صغيرا ، نكتب قصة تحول في الماء.</p>

                                    <p className='mt-2'>تبدأ أسبوعيا من 1 يوليو 2024 حتى 25 أغسطس 2024 بسعر 25.00 دولارا لكل درس. انضم إلينا في جلسة صيفية مدتها 8 أسابيع (ملاحظة: لا توجد دروس في 1 يوليو و 4-5 أغسطس) ، مما يعزز رابطة مدى الحياة مع الماء. انغمس في تجربة K&K ، حيث كل درس هو خطوة نحو مغامرة مائية ملهمة.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default EnrollNow