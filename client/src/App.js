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
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App