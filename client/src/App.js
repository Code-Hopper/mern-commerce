import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// importing pages
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Store from "./components/pages/Store"
import CustomerLR from "./components/pages/CustomerLR"
import Product from "./components/pages/Product"

// importing bootstarp
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import LoginRegister from "./components/customer-actions/LoginRegister";
import Account from "./components/customer-actions/Account";

const App = () => {

  return (
    <>
      {/* creating router for frontend */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/customerlr" element={<CustomerLR />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/user/login-register" element={<LoginRegister />} />
          <Route path="/user/account" element={<Account />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App