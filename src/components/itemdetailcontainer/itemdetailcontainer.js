import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Products from '../../products.json'
import ItemDetail from '../itemdetail/itemDetail';


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([null]);
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
                setProductos(res.filter((producto) => producto.id === detailId))
            }
            )
    }, [detailId]);
    console.log(productos)


    return (
        <>

            <div className='d-flex'>
                {productos ? (
                    // console.log('hola')
                    <ItemDetail producto={productos} key={productos.id} />
                ) : 'Cargando'
                }
            </div>
        </>

    )

}

export default ItemDetailContainer