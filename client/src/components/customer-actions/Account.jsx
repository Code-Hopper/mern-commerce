import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Account = () => {

    let [userAction, setUserAction] = useState("")

    let [AccountUser, setAccountUser] = useState({})

    let navigate = useNavigate()

    useEffect(() => {

        const AuthUser = async () => {

            try {

                let token = localStorage.getItem("token")

                console.log(token)

                let result = await axios.get("http://localhost:5000/api/user/account", {
                    headers: {
                        "Authorization": token,//got from local env
                        'Content-Type': 'application/json'
                    }
                })

                console.log(result.status)

                if (result.status === 200) {
                    setAccountUser(result.data.user)
                } else {
                    navigate("/user/login-register")
                }

            } catch (err) {
                // console.log("Error While loading the account page !")
                // console.log(err)
                navigate("/user/login-register")
            }

        }

        AuthUser()

    }, [])

    let handelLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }

    let handelUserActionClick = (event) => {
        // alert(event.target.dataset.action)
        setUserAction(event.target.dataset.action.toString())
    }

    let editUserInput = () =>{
        document.querySelectorAll(".user-info-input").forEach((element)=>{
            console.log(element)
            element.disabled = false
        })
    }

    // function for each user action

    let info = () => {
        console.log(AccountUser)
        return (
            <>
                <h1>Account Info</h1>

                <div className='user-action-button-content user-account-info'>
                    <form action="">
                        <div className='row'>
                            <div className='col d-flex gap-3 align-items-center'>
                                <label className='fw-bold text-danger' htmlFor="">Name</label>
                                <input className='form-control user-info-input' type="text" value={AccountUser.name} disabled />
                            </div>
                            <div className='col d-flex gap-3 align-items-center'>
                                <label className='fw-bold text-danger' htmlFor="">Phone</label>
                                <input className='form-control user-info-input' type="number" value={AccountUser.phone} disabled />
                            </div>
                        </div>
                    </form>
                </div>

                <button className='btn btn-primary' onClick={editUserInput}>edit</button>

            </>
        )
    }

    let orders = () => {
        return (
            <>
                <h1>Orders History</h1>
            </>
        )
    }

    let billing = () => {
        return (
            <>
                <h1>Billing Details</h1>
            </>
        )
    }

    let feedback = () => {
        return (
            <>
                <h1>Feedback</h1>
            </>
        )
    }

    let displayUserContent = () => {
        switch (userAction) {
            case "info": return info()
            case "orders": return orders()
            case "billing": return billing()
            case "feedback": return feedback()
            default: return null
        }
    }

    return (
        <>
            <div className="container-fluid bg-black text-light d-flex gap-3 py-2">
                <span className='fs-3'>Welcome ! {AccountUser.name} .</span>
                <button className='btn btn-danger' onClick={handelLogout}>logout</button>
            </div>

            <div className='container-fluid p-5'>
                <div className="container user-dashboard shadow-lg">
                    <div className='row w-100 h-100'>
                        <div className="col-3 user-dashboard-actions bg-dark d-flex flex-column p-0">
                            {/* buttons */}
                            <span className='text-center text-light fw-bold fs-4 py-3'>User <span className='text-danger'>Actions</span></span>
                            <button onClick={handelUserActionClick} data-action="info" className='btn btn-dark shadow-lg text-light p-5'>Account Info</button>
                            <button onClick={handelUserActionClick} data-action="orders" className='btn btn-dark shadow-lg text-light p-5'>Orders</button>
                            <button onClick={handelUserActionClick} data-action="billing" className='btn btn-dark shadow-lg text-light p-5'>Billing Details</button>
                            <button onClick={handelUserActionClick} data-action="feedback" className='btn btn-dark shadow-lg text-light p-5'>Feedback</button>
                        </div>
                        <div className="col user-dashboard-content p-3">
                            {displayUserContent()}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Account