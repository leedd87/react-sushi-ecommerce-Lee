import React from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { cantParcial } = useContext(CartContext)
    return (
        <>
            <div className='d-flex'>
                <Link to="/Cart"><FiShoppingCart size='1.5em' color='#701f36' /> {cantParcial} </Link>
            </div>
        </>
    )
}
