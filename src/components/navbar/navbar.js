import React from "react";
import '../styles/navbar.css'
import sushiLoveLogo from '../..//images/sushiLove.png'
import { CartWidget } from "../cartwidget/cartWidget";
import { Link } from 'react-router-dom'

const categories = [
    { url: '', label: 'Home' },
    { url: 'menu', label: 'Menu' },
    { url: 'delivery', label: 'Delivery' },
    { url: 'contactus', label: 'Contact Us' },

]


const Navbar = () => {
    return (
        <>
            <nav className='navBar'>
                <div className='logo'>
                    <img src={sushiLoveLogo} alt='logo sushi ecommerce' />
                    <h1 className='logoText'>SushiLove</h1>
                </div>
                <div>
                    <ul className='navList'>
                        {categories.map(({ url, label, index }) => (<li className='my-3 mx-3'><Link key={index} to={`/${url}`}>{label}</Link ></li>))}
                        {/* <li className='my-3 mx-3'><Link to={`/`}>Home</Link></li>
                        <li className='my-3 mx-3'><Link to={`/menu`}>Menu</Link></li>
                        <li className='my-3 mx-3'><Link to={`/delivery`}>Delivery</Link></li>
                        <li className='my-3 mx-3'><Link to={`/contactus`}>Contact Us</Link></li> */}
                        <li className='my-3 mx-3'><Link to={`/cart`}><CartWidget /></Link></li>
                        <li className='my-3 mx-3'>0</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar