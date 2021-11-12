import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../products.json'
import ItemDetail from '../itemdetail/itemDetail';
import Loader from '../loader/loader'


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
            }, 3000);
        });

    useEffect(() => {
        getData(Products)
            .then((res) => {
                let producto = res.filter((e) => {
                    // console.log(e)
                    if (e.id === parseInt(detailId)) {
                        return e
                    } else {
                        return null
                    }
                }
                )
                // console.log(producto)
                setProductos(producto[0])
            })
            .catch((err) => console.log(err))
    }, [productos, detailId]);



    return (
        <>
            <div className='container-fluid row justify-content-center'>

                {productos ? (

                    <ItemDetail
                        img={productos.img}
                        name={productos.name}
                        price={productos.price}
                        stock={productos.stock} />
                ) : <Loader />
                }

            </div>





        </>
    )

}

export default ItemDetailContainer

