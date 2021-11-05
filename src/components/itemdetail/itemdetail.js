import React from "react";
import ItemCounter from "../itemcounter/itemCounter";


const ItemDetail = ({ producto }) => {

    return (
        <>
            <div className='container-fluid'>
                <div className="card mb-3" style={{ width: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={producto.img} style={{ height: 400 }} className="img-fluid rounded-start" alt="sushiFoto" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{producto.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>$ {producto.price}</p>
                                <ItemCounter initial={0} stock={10} />
                                <a href="/#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}

export default ItemDetail;