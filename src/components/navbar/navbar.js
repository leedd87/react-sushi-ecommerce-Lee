import React from "react";
import '../styles/navbar.css'
import sushiLoveLogo from '../../images/sushiLove.png'
import { CartWidget } from "../cartwidget/cartwidget";

const Navbar = () => {
    return (
        <>
            <nav className='navBar'>
                <div className='logo'>
                    <img src={sushiLoveLogo} alt='logo sushi ecommerce' />
                    <h1 class='logoText'>SushiLove</h1>
                </div>
                <div>
                    <ul className='navList'>
                        <li className='my-3 mx-3'><a href="https://reactjs.org">Home</a></li>
                        <li className='my-3 mx-3'><a href="https://reactjs.org">Menu</a></li>
                        <li className='my-3 mx-3'><a href="https://reactjs.org">Delivery</a></li>
                        <li className='my-3 mx-3'><a href="https://reactjs.org">Contact Us</a></li>
                        <li className='my-3 mx-3'><CartWidget /></li>
                        <li className='my-3 mx-3'>0</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar