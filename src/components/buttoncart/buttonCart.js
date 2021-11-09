import React from 'react';
import { Link } from "react-router-dom"


const BtnCart = ({ count }) => {
    return (
        <>
            <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
                <button className="col-9 col-sm-8 justify-self-center mt-1">
                    <Link to='/cart'>Ver carrito:{count}</Link>
                </button>
                <button className="col-9 col-sm-8 justify-self-center mt-1">
                    <Link to='/'>Volver</Link>
                </button>
            </div>
        </>
    )
}

export default BtnCart;