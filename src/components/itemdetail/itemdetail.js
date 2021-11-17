import React, { useState } from "react";
import ItemCounter from "../itemcounter/itemCounter";
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({ item }) => {


    const [carrito, setCarrito] = useState(0)

    const { AddToCart } = useContext(CartContext)

    const onAdd = (contador) => {
        setCarrito(contador)
        AddToCart({ item, cantidad: contador })
    }

    return (
        <>
            <div className='d-flex justify-content-center col-12 my-3'>
                <div className="card mb-3" style={{ width: 700 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.img} style={{ height: 400 }} className="img-fluid rounded-start" alt="sushiFoto" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>$ {item.price}</p>
                                < ItemCounter stock={item.stock} onAdd={onAdd} />
                                <div className="col-10 col-sm-9 col-lg-8 row justify-content-center align-content-center justify-self-center mx-0">
                                    <button className="col-9 col-sm-8 justify-self-center mt-1">
                                        <Link to='/cart'>Items seleccionados:{carrito}</Link>
                                    </button>
                                    <button className="col-9 col-sm-8 justify-self-center mt-1">
                                        <Link to='/'>Volver</Link>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;

