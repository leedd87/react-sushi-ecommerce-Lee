import React, { useState, useEffect } from 'react';
import Products from '../../products.json'
import Item from '../items/items';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    //probando cambio
    const { categoryId } = useParams();
    //fin probando cambio
    const [productos, setProductos] = useState([]);

    const getData = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
                } else {
                    reject('No se cargo el menu')
                }
            }, 2000);
        });



    useEffect(() => {
        getData(Products)
            .then((res) =>
            //probando categoryId <--- antes no estaba 
            {
                categoryId ?
                    setProductos(res.filter((producto) => producto.category === categoryId))
                    : setProductos(res)
            })
            .catch((err) => console.log(err));
    }, [categoryId]);

    return (

        <div className='container-fluid row justify-content-center'>
            {productos.length ? productos
                .map((producto) => (
                    <Item producto={producto} key={producto.id} />
                ))
                : 'Cargando...'}
        </div>


    )
}

export default ItemListContainer