import React from "react";
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export const CartWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <div className='d-flex'>

                <FiShoppingCart size='1.5em' color='#701f36' />
                <p>{cart.length}</p>
            </div>
        </>
    )
}
