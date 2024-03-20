import React, { useState } from "react";
import axios from "axios"


// importing bootstarp
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {

  let response;

  let [message, setMessage] = useState(" ")

  let pingBackend = async () => {
    try {
      response = await axios({
        method: "GET",
        url: "http://localhost:5000/api/test"
      })

      console.log(response)

      setMessage(response.data.message)
      console.log(response.data.message)
    } catch (err) {
      console.log(`error while ping the backend ${err} !`)
    }
  }

  pingBackend()

  return (
    <>
      {/* browser router dom */}

      <h1>Hello This is Frontend App.jsx</h1>

      <h2>{message}</h2>

    </>
  )
}

export default App