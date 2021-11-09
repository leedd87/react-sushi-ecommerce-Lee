import React, { useState } from "react";
import ItemCounter from "../itemcounter/itemCounter";
import BtnCart from "../buttoncart/buttonCart";


const ItemDetail = ({ producto }) => {
    const [flag, setFlag] = useState(true)
    const [countDetailItem, setCountDetailItem] = useState(0)

    const addCart = (contador) => {
        setFlag(false);
        setCountDetailItem(contador)

    }

    return (
        <>
            <div className='d-flex justify-content-center col-12 my-3'>
                <div className="card mb-3" style={{ width: 700 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} style={{ height: 400 }} className="img-fluid rounded-start" alt="sushiFoto" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>$ {producto.price}</p>
                                {flag ? <ItemCounter initial={0} stock={producto.stock} onAdd={addCart} /> : <BtnCart count={countDetailItem} />}

                                {/* <a href="/" className="btn btn-primary d-flex justify-content-center">Agregar Carrito</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;

