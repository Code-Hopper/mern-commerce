import React from 'react'
import { Link } from 'react-router-dom';

import { IoIosCart } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter, FaTelegram, FaHome, FaPhone, FaShoppingBag, FaHeart, FaBars } from "react-icons/fa";



const Navbar = () => {
    return (
        <>
            <div className='contaier-fluid bg-primary text-light py-2 d-none d-lg-block'>
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

                    {/* mobile menu trigger */}

                    <button className='navbar-toggler' data-bs-target="#mmm" data-bs-toggle="offcanvas">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    {/* only for mobile device account off canvas */}

                    <div className='offcanvas offcanvas-end d-lg-none' data-bs-backdrop="static" id='mmm'>
                        <div className='offcanvas-head p-3 d-flex justify-content-between bg-black text-white align-items-center'>
                            <span className='fw-bold'>User Actions Menu</span>
                            <button className='btn btn-light' data-bs-dismiss="offcanvas">
                                <RxCross2 />
                            </button>
                        </div>
                        <div className='offcanvas-body p-3'>
                            <div className='fw-bold d-flex flex-column justify-content-center align-items-center gap-5'>
                                <span className='dropdown-toggle'>My Account</span>
                                <span className='dropdown-toggle'>User Action </span>
                                <span>Cart <IoIosCart className='text-black' size={"25px"} /> </span>
                            </div>
                            <div className='mt-5 d-flex justify-content-center gap-4 fs-4'>
                                <FaFacebook /> <FaInstagram /> <FaWhatsapp /> <FaTwitter /> <FaTelegram />
                            </div>
                        </div>
                    </div>

                    {/* search bar */}
                    {/* 2 parts in search bar input, catigories */}

                    <div className='main-serach-bar-container d-none d-lg-flex'>
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

                    <ul className='navbar-nav align-items-center gap-3 d-none d-lg-flex'>
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

            {/* mobile menu section */}
            <div className='mobile-mobile-special text-white d-lg-none'>
                <div className='mobile-menu-icon-container'>
                    <FaHome className='fa' />
                    <span>Home</span>
                </div>
                <div className='mobile-menu-icon-container'>
                    <FaPhone className='fa' style={{ "color": "green" }} />
                    <span>Support</span>
                </div>
                <div className='mobile-menu-icon-container'>
                    <div className='mobile-menu-icon-container mobile-menu-icon-special'>
                        <FaShoppingBag className='fa' style={{ "color": "skyblue", fontSize: "1.6rem" }} />
                        <span>Shop</span>
                    </div>
                </div>
                <div className='mobile-menu-icon-container'>
                    <FaHeart className='fa' style={{ "color": "red" }} />
                    <span>Whish List</span>
                </div>
                <div className='mobile-menu-icon-container' data-bs-toggle="offcanvas" data-bs-target="#momm">
                    <FaBars className='fa' />
                    <span>Menu</span>
                </div>

                {/* offcanvas for mobile menu */}
                <div className='offcanvas offcanvas-bottom' id='momm'>
                    <div className='offcanvas-head p-3 d-flex justify-content-between bg-black text-white align-items-center'>
                        <span className='fw-bold'>Main Menu</span>
                        <button className='btn btn-light' data-bs-dismiss="offcanvas">
                            <RxCross2 />
                        </button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className='navbar-nav flex-row align-items-center gap-3 justify-content-center'>
                            <li className='nav-item'>
                                <Link className='nav-link'>Shop</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link dropdown-toggle'>Products</Link>
                            </li>
                        </ul>
                        <div className='navbar-nav flex-row justify-content-center gap-5'>
                            <li className='nav-item'>
                                <Link className='btn btn-success btn-sm rounded-pill fw-bold'>Today's Deals</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='btn btn-danger btn-sm rounded-pill fw-bold'>Special Offers</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar