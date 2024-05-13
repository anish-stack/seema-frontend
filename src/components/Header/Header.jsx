import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logosemaa.png'
import { useSelector } from 'react-redux'
import axios from 'axios'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [item, setItem] = useState()
    const [dropdown, setDropdown] = useState()

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }
    const handleClose = () => {
        setShowMenu(false)
    }
    const cartItems = useSelector(state => state.cart);
    console.log(cartItems.items.length);
    const User = useSelector(state => state.register)

    const handleFetchMainCategorey = async () => {
        try {
            const res = await axios.get('http://localhost:4234/api/get-all-main-category')
            // console.log(res.data.data)
            setItem(res.data.data)
        } catch (error) {
            console.log(`error`)
        }
    }
    const handleFetchSubCategory = async (item) => {
        try {
            const res = await axios.get(`http://localhost:4234/api/get-title/${item}`)
            console.log(res.data.data)
            setDropdown(res.data.data)
        } catch (error) {
            console.log(`error`)
        }
    }
    const handleRemoveSubCategory = () => {
        setDropdown(null)
    }
    useEffect(() => {
        handleFetchMainCategorey()
        handleFetchSubCategory()
    }, [])
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
                        {item && item.map((item, index) => (
                            <li onMouseEnter={() => handleFetchSubCategory(item)} className='font-medium relative text-gray-900 text-lg ' key={index}>{item}</li>
                        ))}
                        <div onMouseLeave={handleRemoveSubCategory} className='dropdown'>
                            {dropdown && dropdown.map((drop, index) => {
                                return (
                                    <Link to={`/Category-Product/${drop}`} key={index}>{drop}</Link>
                                );
                            })}
                        </div>

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