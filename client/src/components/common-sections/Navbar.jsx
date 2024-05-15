import React from 'react'

import { IoIosCart } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <div className='contaier-fluid bg-primary text-light py-2'>
                <div className="container d-flex justify-content-between">
                    <span className='fw-medium'>Quick Contact : 97666966550 | codehopper11@gmail.com</span>
                    <div className='fw-bold d-flex gap-3'>
                        <span className='dropdown-toggle'>My Account</span>
                        <span className='dropdown-toggle'>Login</span>
                        <span>Cart <IoIosCart className='text-black' size={"25px"}/> </span>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-black'>
                <nav className='container bg-black navbar navbar-dark'>
                    {/* logo */}
                    <span className='navbar-brand d-flex justify-content-center align-items-center'> <IoIosCart className='text-primary' size="40px" /> <span>MERN-<span className='fw-bold'>Commerce</span></span></span>
                    {/* main menu (mega menu) */}
                    {/* Customer Action(profile, cart, wishlist)  */}
                </nav>
            </div>
        </>
    )
}

export default Navbar