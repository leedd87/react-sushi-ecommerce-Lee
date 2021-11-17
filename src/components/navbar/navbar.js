import React from "react";
import '../styles/navbar.css'
import sushiLoveLogo from '../..//images/sushiLove.png'
import { CartWidget } from "../cartwidget/cartWidget";
import { Link } from 'react-router-dom'

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
                        <li className='my-3 mx-3'><Link to={""}>Home</Link></li>
                        <li className='my-3 mx-3'><Link to={`/categoria/sushi`}>Sushi</Link></li>
                        <li className='my-3 mx-3'><Link to={`/categoria/salad`}>Salad</Link></li>
                        <li className='my-3 mx-3'><Link to={`/categoria/poke`}>Poke</Link></li>
                        <li className='my-3 mx-3'>
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar