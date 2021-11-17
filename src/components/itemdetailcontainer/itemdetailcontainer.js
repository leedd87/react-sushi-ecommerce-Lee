import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../../getProducts';
import ItemDetail from '../itemdetail/itemDetail';
import Loader from '../loader/loader'


const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({});
    const { detailId } = useParams();
    const [loadingTwo, setLoadingTwo] = useState(true)  //se muestra un loading inicial en true

    useEffect(() => {
        getProductos
            .then(res => setProductos(res.find(prod => prod.id === parseInt(detailId))))
            .catch(err => console.log(err))
            .finally()

        setTimeout(() => {
            setLoadingTwo(false)
        }, 2000);
    }, [detailId]);



    return (
        <>
            <div className='container-fluid row justify-content-center'>
                {
                    loadingTwo ? <Loader /> :
                        <ItemDetail
                            item={productos} />
                }
            </div>
        </>
    )

}

export default ItemDetailContainer

