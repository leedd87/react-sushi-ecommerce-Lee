import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../products.json'
import ItemDetail from '../itemdetail/itemDetail';



const ItemDetailContainer = () => {

    const [productos, setProductos] = useState(null);
    const { detailId } = useParams();

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
            .then((res) => {
                let producto = res.filter((e) => {
                    console.log(e)
                    if (e.id === parseInt(detailId)) {
                        return e
                    } else {
                        return null
                    }
                }

                )
                console.log(producto)
                setProductos(producto[0])
            })
            .catch((err) => console.log(err))
    }, [productos, detailId]);



    return (
        <>
            <div className='container-fluid row justify-content-center'>

                {productos ? (

                    <ItemDetail producto={productos} />
                ) : 'Cargando'
                }

            </div>





        </>
    )

}

export default ItemDetailContainer

// import React, { useState, useEffect } from 'react';
// import Products from '../../products.json'
// import ItemDetail from '../itemdetail/itemDetail';

// const ItemListContainer = () => {

//     const [productos, setProductos] = useState([]);

//     const getData = (data) =>
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (data) {
//                     resolve(data);
//                 } else {
//                     reject('No se cargo el menu')
//                 }
//             }, 1500);
//         });



//     useEffect(() => {
//         getData(Products)
//             .then((res) => setProductos(res))
//             .catch((err) => console.log(err));
//     }, []);

//     return (
//         <div className='d-flex'>
//             {productos.length ? productos
//                 .map((producto) => (
//                     <ItemDetail producto={producto} key={producto.id} />
//                 ))
//                 : 'Cargando...'}

//         </div>
//     )
// }

// export default ItemListContainer