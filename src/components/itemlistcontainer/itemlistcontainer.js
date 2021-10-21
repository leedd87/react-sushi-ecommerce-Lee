import React, { useState, useEffect } from 'react';
import Products from '../../products.json'
import Item from '../items/items';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se cargo el menu')
                }
            }, 3000);
        });

    useEffect(() => {
        getData(Products)
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className='d-flex'>
            {productos.length ? productos.map((producto) => (
                <Item product={producto} key={producto.id} />
            ))
                : 'Cargando...'}
        </div>
    )
}

export default ItemListContainer