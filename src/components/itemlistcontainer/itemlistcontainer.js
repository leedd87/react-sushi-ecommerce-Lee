import React, { useState, useEffect } from 'react';
import { getProductos } from '../../getProducts';
import Item from '../items/items';
import { useParams } from "react-router-dom";
import Loader from '../loader/loader';


const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);
    console.log(productos)




    useEffect(() => {
        getProductos
            .then(res => {
                if (categoryId) {
                    setProductos(res.filter(item => item.category === categoryId))
                } else {
                    setProductos(res)
                }
            })


            .catch(err => console.log(err))
            .finally()

        setTimeout(() => {
            setLoading(false)
        }, 3000);

    }, [categoryId]);


    return (

        <div className='container-fluid row justify-content-center'>
            {loading ?
                <div>
                    <Loader />
                </div>
                :
                productos.map((item) => (
                    <Item producto={item} key={item.id} />
                ))
            }
        </div>


    )
}

export default ItemListContainer