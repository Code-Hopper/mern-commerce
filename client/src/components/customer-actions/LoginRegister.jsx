import React, { useCallback, useState } from 'react'
import axios from "axios"
import RegisterUserFormImg from "../media/register-user-form-img.jpg"
import "../style.css"
import UserLoginImg from "../media/user-login.jpg"
import { useNavigate } from 'react-router-dom'

import { FaRotate } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const LoginRegister = () => {

  let [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address_street: "",
    address_city: "",
    address_state: "",
    address_pin: "",
    dob: "",
    gender: "N/A",
    password: "",
    cpassword: ""
  })

  let navigate = useNavigate()

  let [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

  let [openLoginPopUp, setOpenLoginPopUp] = useState(false)

  let [loginMessage, setLoginMessage] = useState("")

  // creating a popup for register user

  let [registerStatus, setRegisterStatus] = useState("")

  let [maderegisterCall, setMaderegisterCall] = useState(false)

  let [show, setShow] = useState(false)

  let [isValidPassword, setIsValidPassword] = useState(false)

  let ShowHidePassword = () => {
    setShow(!show)
  }

  let handelRegisterInputChange = (event) => {
    let { name, value } = event.target
    setCustomer({ ...customer, [name]: value })
  }

  let matchPassword = (event) => {
    if (!(customer.password === customer.cpassword)) {
      setIsValidPassword(false)
    } else {

      const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~]).{8,}$/;
      let statement = customer.password.match(regex)

      console.log(statement)

      statement ? setIsValidPassword(true) : setIsValidPassword(false)

    }
  }

  let handelRegisterFormSubmit = async (event) => {
    event.preventDefault()
    if (isValidPassword) {
      console.log(customer)
      setMaderegisterCall(true)
      // sending data to db for user registration
      let result;
      try {
        result = await axios({
          method: 'post',
          url: 'http://localhost:5000/api/user/register',
          data: customer
        });

        if (result.status === 202) {
          alert("Successfully Register Please Login !")
          setRegisterStatus(true)
        }

      } catch (err) {
        console.log(`some error while register ${err} !`)
        alert("Already Registerd Please Login !")
        setRegisterStatus(false)
      }

    } else {
      alert("Unable to Register User !!")
      setCustomer({
        name: "",
        phone: "",
        email: "",
        address_street: "",
        address_city: "",
        address_state: "",
        address_pin: "",
        dob: "",
        gender: "N/A",
        password: "",
        cpassword: ""
      })
    }
  }

  let handelLoginFormSubmit = async (event) => {
    event.preventDefault()

    // send data toward login route at backend !

    let LoginResult;

    try {

      LoginResult = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/user/login',
        data: userLogin
      })

      console.log(LoginResult.data.message)
      console.log(LoginResult.data.token)

      // console.log(LoginResult.data.user)

      setLoginMessage(LoginResult.data.message)

      setOpenLoginPopUp(true)

      localStorage.setItem("token",LoginResult.data.token)

      navigate("/user/account")

    } catch (err) {
      console.log("Some Error While Login : " + err)
    }
  }

  let closeLoginMessagePopUp = () =>{
    setOpenLoginPopUp(false)
  }

  let handelLoginInputChange = (event) => {
    let { name, value } = event.target
    setUserLogin({ ...userLogin, [name]: value })
  }

  return (
    <>

      {/* navbar here */}

      <div className='container-fluid my-5'>
        <div className="container">
          <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="login-form" data-bs-toggle="pill" data-bs-target="#login-form-container" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#register-form-container" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="login-form-container">
              <div className="row">
                <div className="col">

                  <form onSubmit={handelLoginFormSubmit} className='w-100 h-100 d-flex flex-column justify-content-center py-5 gap-3'>
                    <div className='form-heading'>
                      <h1 className='fw-light'>Login <span className='text-primary fw-bold'>Customer</span></h1>
                    </div>
                    <div>
                      <input className='form-control' onChange={handelLoginInputChange} type="email" placeholder='User Email' name="email" value={userLogin.email} required />
                    </div>
                    <div className='d-flex flex-row gap-3 user-login-password-filed'>
                      <input className='form-control' onChange={handelLoginInputChange} type={show ? "text" : "password"} placeholder='User Password' name='password' value={userLogin.password} required />
                      <button className='' onClick={ShowHidePassword} type='button'>{show ? <FaEyeSlash /> : <FaEye />} </button>
                    </div>

                    <div className='register-user-form-cta d-flex gap-3'>
                      {/* <buttton className="btn btn-success" type="submit" onClick={handelSubmitClick}>
                        Register <MdOutlineAddReaction />
                      </buttton> */}
                      <input className='btn btn-success' type="submit" value="Login" />
                      <buttton className="btn btn-danger" type="button">Reset <FaRotate /> </buttton>
                    </div>

                  </form>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                  <img className='img-fluid' src={UserLoginImg} alt="" />
                </div>
              </div>

            </div>
            <div class="tab-pane fade" id="register-form-container">

              <div className='container'>
                {
                  maderegisterCall ?
                    registerStatus ?
                      <div className='alert alert-success text-center fw-bolder'>Register Successfull Please Head to Login !</div> :
                      <div className='alert alert-danger text-center fw-bolder'>Already Registered With This Email Please Login !</div>
                    : ""
                }
              </div>

              <div className="row">
                <div className="col">



                  <form onSubmit={handelRegisterFormSubmit} id='register-user-form' className='w-100 h-100 d-flex flex-column justify-content-center py-5 gap-3'>
                    <div className='form-heading'>
                      <h1 className='fw-light'>Register <span className='text-primary fw-bold'>User</span></h1>
                    </div>


                    {/* creating registeration form */}
                    <div className='d-flex gap-2'>
                      <input className='form-control' onChange={handelRegisterInputChange} type="text" placeholder='Full Name' name="name" value={customer.name} />
                      <input className='form-control' onChange={handelRegisterInputChange} type="number" placeholder='Phone Number' name="phone" value={customer.phone} />
                    </div>
                    <div>
                      <input className='form-control' onChange={handelRegisterInputChange} type="email" placeholder='Email Address' name="email" value={customer.email} />
                    </div>
                    <div className='d-flex gap-2'>

                      <input className='form-control w-50' onChange={handelRegisterInputChange} type="date" placeholder='DOB' name='dob' value={customer.dob} />

                      {/* make gender selection */}
                      <div className='register-form-gender-selection w-50 d-flex align-items-center justify-content-evenly'>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Male</span><input className='form-radio' onChange={handelRegisterInputChange} type="radio" name='gender' value="male" />
                        </div>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Female</span><input className='form-radio' onChange={handelRegisterInputChange} type="radio" name='gender' value="female" />
                        </div>
                        <div className='d-flex gap-2'>
                          <span className='fw-bold'>Other's</span><input className='form-radio' onChange={handelRegisterInputChange} type="radio" name='gender' value="other" />
                        </div>

                      </div>

                    </div>

                    {/* collect 4 phase address */}
                    <div className='register-user-form-address'>
                      <input className='form-control my-2' onChange={handelRegisterInputChange} type="text" placeholder='stree address' name='address_street' value={customer.address_street} />
                      <div className='d-flex'>

                        <input className='form-control' onChange={handelRegisterInputChange} type="text" placeholder='City' name="address_city" value={customer.address_city} />

                        <input className='form-control' onChange={handelRegisterInputChange} type="text" placeholder='State' name="address_state" value={customer.address_state} />

                        <input className='form-control' onChange={handelRegisterInputChange} type="number" placeholder='Pin Code' name="address_pin" value={customer.address_pin} />

                      </div>

                    </div>
                    <div className='d-flex flex-column gap-3'>
                      <input className='form-control' onChange={handelRegisterInputChange} type={show ? "text" : "password"} placeholder='Create Password' name='password' value={customer.password} required />
                      <input className='form-control' onBlur={matchPassword} onChange={handelRegisterInputChange} type={show ? "text" : "password"} placeholder='Confirm Password' name='cpassword' value={customer.cpassword} required />
                      <div className='d-flex'>
                        <button className='btn btn-dark' onClick={ShowHidePassword} type='button'> {show ? `Hide Password ` : "Show Password"} {show ? <FaEyeSlash /> : <FaEye />} </button>
                        {
                          isValidPassword ? <span className='fw-bolder bg-success text-light mx-3 p-1 rounded-2'>Valid Password !</span> : <span className='fw-bolder bg-danger text-light mx-3 p-1 rounded-2'>password didn't matched !</span>
                        }
                      </div>
                      {
                        isValidPassword ? <span></span> : <span className='alert alert-danger'>
                          minimum 8 chars " number, upper & lower case, special char "
                        </span>
                      }
                    </div>

                    <div className='register-user-form-cta d-flex gap-3'>
                      {/* <buttton className="btn btn-success" type="submit" onClick={handelSubmitClick}>
                        Register <MdOutlineAddReaction />
                      </buttton> */}
                      <input className='btn btn-success' type="submit" value="register" />
                      <buttton className="btn btn-danger" type="button">Reset <FaRotate /> </buttton>
                    </div>

                  </form>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                  <img className='img-fluid' src={RegisterUserFormImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* open pop-up section conditional */}

      {
        openLoginPopUp ?
          <div id='displayLoginMessages' className='shadow-lg d-flex flex-column justify-content-center align-items-center'>
            <h1 className='text-dark'>{loginMessage}</h1>
            <button className='btn btn-danger btn' onClick={closeLoginMessagePopUp}>Close !</button>
          </div> : null
      }

      {/* footer here */}

    </>
  )
}

export default LoginRegister