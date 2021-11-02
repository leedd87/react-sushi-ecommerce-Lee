import { useState, useEffect } from 'react';
import Products from '../../products.json'
import ItemDetail from '../itemdetail/itemdetail';


const ItemDetailContainer = () => {

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
            .then((res) => setProductos(res))
            .catch((err) => console.log(err));
    }, []);



    return (
        <div className='d-flex'>
            {productos.length ? productos
                .filter((producto) => producto.id === 1)
                .map((producto) => (
                    <ItemDetail producto={producto} key={producto.id} />
                ))
                : 'Cargando...'}

        </div>

    )

}

export default ItemDetailContainer