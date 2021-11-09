import React from 'react';


const Cart = ({ count }) => {
    //tengo que exportar el valor de btnCart y mostrarlo en este Cart
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center col-12 my-3'>
                <div>
                    <h3 className="modal-title">Carrito</h3>
                    <div className="modal-body">
                        <p>ACA VAN LOS ITEMS</p>
                    </div>

                    <button type="button" className="btn btn-secondary">Cancelar</button>
                    <button type="button" className="btn btn-primary">Comprar</button>
                </div>
            </div>

        </>)
}

export default Cart