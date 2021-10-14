import React from "react";

const Item = ({ img, title, price }) => {
    return (
        <><div className='container-fluid'>
            <div class="card" style={{ width: 280 }}>
                <img src={img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p>{price}</p>
                    {/* CREAR COMPONENTE CONTADOR */}
                    <div className='d-flex'>
                        <button>+</button>
                        <p>0</p>
                        <button>+</button>
                    </div>
                    <a href="/#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div></>
    )
}

export default Item;