import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Account = () => {

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
                console.log("Error While loading the account page !")
                console.log(err)
                navigate("/user/login-register")
            }

        }

        AuthUser()

    }, [])

    return (
        <div>
            <h1>Welcome ! {AccountUser.name} .</h1>
        </div>
    )
}

export default Account