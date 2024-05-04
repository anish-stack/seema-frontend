import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logosemaa.png'
import { useSelector } from 'react-redux'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleToggle = () => {
        setShowMenu(!showMenu)
    }
    const handleClose = () => {
        setShowMenu(false)
    }
    const cartItems = useSelector(state => state.cart);
    console.log(cartItems.items.length);
    const User = useSelector(state => state.register)

    return (
        <header className='bg-banner'>
            <div className="top-header">

                <div className="front whitespace-nowrap">
                    <span>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span>
                    <span className=' hidden md:block'>FREE DELIVERY FOR ORDER OVER $120</span>
                    {/* <span className=' hidden md:block'>
                    USE COUPON CODE NEW15 FOR 15% OFF ON FIRST PURCHASE
                    </span> */}
                    {/* <span className=' hidden md:block'>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span>
                    <span className=' hidden md:block'>USE COUPON CODE NEW15 FOR 15% OFF ON FIRST PURCHASE</span> */}

                </div>
                <div className="back  whitespace-nowrap">
                    {/* <span>SIGN UP AND GET 10% OFF YOUR FIRST ORDER</span> */}
                    <span className=' hidden md:block'>USE COUPON CODE NEW15 FOR 15% OFF ON FIRST PURCHASE</span>
                    <span className=' hidden md:block'>
                        END YEAR SALE UP TO 50%
                    </span>
                    <span className=' hidden md:block'>USE COUPON CODE NEW15 FOR 15% OFF ON FIRST PURCHASE</span>
                    <span className=' hidden md:block'>FREE DELIVERY FOR ORDER OVER $120</span>

                </div>

            </div>
            {/* no touchable */}
            <div className='navbar flex items-center whitespace-nowrap  bg-white  shadow-md justify-between p-2 gap-2'>
                <div className='navbar-brand py-4 w-32'>
                    <img src={logo} className='logo' alt="This is Seema Collections logo" />
                </div>
                <nav className={`${showMenu ? 'showNavBar' : ''}`}>
                    <ul className='flex  md:items-center md:space-x-6'>
                        <li onClick={handleClose} className='font-medium text-gray-900 text-lg '><Link to="/">Home</Link></li> 
                        <li onClick={handleClose} className='font-medium text-gray-900 text-lg '><Link to="/Shop">Shop</Link></li>
                        <li  className='font-medium text-gray-900 text-lg relative dropdown-main'>
                            <Link  >Women</Link>
                            <ul className='absolute dropdown-inner z-10'>
                                <li><Link to="">Women 1</Link></li>
                                <li><Link to="">Women 1</Link></li>
                                <li><Link to="">Women 1</Link></li>
                            </ul>
                        </li>
                        <li  className='font-medium text-gray-900 text-lg relative dropdown-main'>
                            <Link  >Women</Link>
                            <ul className='absolute dropdown-inner z-10'>
                                <li><Link to="">Women 1</Link></li>
                                <li><Link to="">Women 1</Link></li>
                                <li><Link to="">Women 1</Link></li>
                            </ul>
                        </li>
                        <li onClick={handleClose} className='font-medium text-gray-900 text-lg '><Link to="/Shirt">Shirt</Link></li>
                        <li onClick={handleClose} className='font-medium text-gray-900 text-lg '><Link to="/Kids-collections">Kids Collections</Link></li>
                        <li onClick={handleClose} className='font-medium text-gray-900 text-lg '><Link to="/bestseNew Arrivalllers">New Arrival</Link></li>
                    </ul>
                </nav>
                <div className='btns-ctas smhidden space-x-4'>
                    {User.token ? (
                        <Link onClick={handleClose} to={'/Profile'}>Profile</Link>
                    ) : (
                        <Link onClick={handleClose} to={'/sign-in'}>Sign In</Link>
                    )}

                    <Link onClick={handleClose} to={'/Shopping-Cart'} className='relative px-3'><i className="ri-shopping-bag-4-line"></i>

                        <span className='absolute count-number'>{cartItems.items.length || "0"}</span></Link>

                </div>
                <div className='mobile  md:hidden'>
                    <div className='btns-ctas space-x-4'>
                        {User.token ? (
                            <Link onClick={handleClose} to={'/Profile'}>Profile</Link>
                        ) : (
                            <Link onClick={handleClose} to={'/sign-in'}>Sign In</Link>
                        )}
                        <Link to={'/Shopping-Cart'} className='relative px-3'><i className="ri-shopping-bag-4-line"></i>

                            <span className='absolute count-number'>{cartItems.items.length || "0"}</span></Link>

                    </div>
                    <ul className='flex items-center transition-all duration-500 ease-in-out space-x-4'>
                        <li onClick={handleToggle}><i className={`ri-menu-3-fill text-xl transition-all duration-500 ease-in-out  ${showMenu ? 'hidden' : ''} font-extrabold`}></i></li>
                        <li onClick={handleToggle}><i className={`ri-close-fill text-xl transition-all duration-500 ease-in-out ${showMenu ? '' : 'hidden'} font-extrabold`}></i></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header