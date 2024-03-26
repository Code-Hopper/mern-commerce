import React,{useState} from 'react'

import RegisterUserFormImg from "../media/register-user-form-img.jpg"


import { MdOutlineAddReaction } from "react-icons/md";
import { FaRotate } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const LoginRegister = () => {

  let [show, setShow] = useState(false)

  let ShowHidePassword = () => {
    setShow(!show)
  }

  return (
    <>

      {/* navbar here */}

      <div className='container-fluid my-5'>
        <div className="container">
          <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="login-form" data-bs-toggle="pill" data-bs-target="#login-form-container" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#register-form-container" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="login-form-container">
              <h1>login form</h1>
            </div>
            <div class="tab-pane fade" id="register-form-container">
              <div className="row">
                <div className="col">
                  <form id='register-user-form' className='w-100 h-100 d-flex flex-column justify-content-center py-5 gap-3'>
                    <div className='form-heading'>
                      <h1 className='fw-light'>Register <span className='text-primary fw-bold'>User</span></h1>
                    </div>
                    {/* creating registeration form */}
                    <div className='d-flex gap-2'>
                      <input className='form-control' type="text" placeholder='Full Name' />
                      <input className='form-control' type="number" placeholder='Phone Number' />
                    </div>
                    <div>
                      <input className='form-control' type="email" placeholder='Email Address' />
                    </div>
                    <div className='d-flex gap-2'>

                      <input className='form-control w-50' type="date" placeholder='DOB' />

                      {/* make gender selection */}
                      <div className='register-form-gender-selection w-50 d-flex align-items-center justify-content-evenly'>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Male</span><input className='form-radio' type="radio" name='gender' />
                        </div>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Female</span><input className='form-radio' type="radio" name='gender' />
                        </div>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Other's</span><input className='form-radio' type="radio" name='gender' />
                        </div>

                      </div>

                    </div>

                    {/* collect 4 phase address */}
                    <div className='register-user-form-address'>
                      <input className='form-control my-2' type="text" placeholder='stree address' />
                      <div className='d-flex'>
                        <input className='form-control' type="text" placeholder='City' />
                        <input className='form-control' type="text" placeholder='State' />
                        <input className='form-control' type="number" placeholder='Pin Code' />
                      </div>

                    </div>
                    <div className='d-flex flex-column gap-3'>
                      <input className='form-control' type={show ? "text" : "password" } placeholder='Create Password' />
                      <input className='form-control' type={show ? "text" : "password" } placeholder='Confirm Password' />
                      <div>
                        <button className='btn btn-dark' onClick={ShowHidePassword} type='button'> { show ? `Hide Password ` : "Show Password" } {show ? <FaEyeSlash/> : <FaEye/> } </button>
                      </div>
                      <span className='alert alert-danger'>
                        minimum 8 chars " number, upper&lower case, special char "
                      </span>
                    </div>

                    <div className='register-user-form-cta d-flex gap-3'>
                      <buttton class="btn btn-success" type="submit">Register <MdOutlineAddReaction /></buttton>
                      <buttton class="btn btn-danger" type="button">Reset <FaRotate /> </buttton>
                    </div>

                  </form>
                </div>
                <div className="col">
                  <img className='img-fluid' src={RegisterUserFormImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer here */}

    </>
  )
}

export default LoginRegister