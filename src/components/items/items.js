import React from "react";
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <>
            <div className='d-flex justify-content-center col-12 col-sm-4 my-3'>
                <div className="card" style={{ width: 280 }}>
                    <Link to={`/detail/${producto.id}`}>
                        <img src={producto.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p>${producto.price}</p>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Item;