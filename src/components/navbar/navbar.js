import React from "react";
import '../styles/navbar.css'
import sushiLoveLogo from '../images/sushiLove.png'

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
                        <li><a href="https://reactjs.org">Home</a></li>
                        <li><a href="https://reactjs.org">Menu</a></li>
                        <li><a href="https://reactjs.org">Delivery</a></li>
                        <li><a href="https://reactjs.org">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar