import React from "react";
import ItemCounter from "../itemcounter/itemCounter";
import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <>
            <div className='container-fluid'>
                <Link to={`/detail/${producto.id}`}>
                    <div class="card" style={{ width: 280 }}>
                        <img src={producto.img} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p>${producto.price}</p>
                            <ItemCounter initial={0} stock={10} />
                            <a href="/" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Item;