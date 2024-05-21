import React from 'react'
import { Link } from 'react-router-dom';

import { IoIosCart } from "react-icons/io";

const Navbar = () => {
    return (
        <>
            <div className='contaier-fluid bg-primary text-light py-2'>
                <div className="container d-flex justify-content-between">
                    <span className='fw-medium'>Quick Contact : 97666966550 | codehopper11@gmail.com</span>
                    <div className='fw-bold d-flex gap-3'>
                        <span className='dropdown-toggle'>My Account</span>
                        <span className='dropdown-toggle'>User Action </span>
                        <span>Cart <IoIosCart className='text-black' size={"25px"} /> </span>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-black'>
                <nav className='container bg-black navbar navbar-expand-lg justify-content-between navbar-dark'>
                    {/* logo */}
                    <span className='navbar-brand d-flex justify-content-center align-items-center'> <IoIosCart className='text-primary' size="40px" /><span>MERN-<span className='fw-bold'>Commerce</span></span></span>

                    {/* search bar */}
                    {/* 2 parts in search bar input, catigories */}

                    <div className='main-serach-bar-container'>
                        <input className='search-bar' type="text" placeholder='product name' />
                        <select className="catigories-selector" name="" id="">
                            <option value="">Option Catigories</option>
                            <option value="">Option 2</option>
                            <option value="">Option 3</option>
                            <option value="">Option 4</option>
                            <option value="">Option 5</option>
                            <option value="">Option 6</option>
                        </select>
                    </div>

                    {/* main menu (mega menu) */}

                    <ul className='navbar-nav align-items-center gap-3'>
                        <li className='nav-item'>
                            <Link className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link'>Shop</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link dropdown-toggle'>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='btn btn-success btn-sm rounded-pill fw-bold'>Today's Deals</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='btn btn-danger btn-sm rounded-pill fw-bold'>Special Offers</Link>
                        </li>
                    </ul>

                    {/* Customer Action(profile, cart, wishlist)  */}
                </nav>
            </div>
        </>
    )
}

export default Navbar