import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemdetail/itemDetail';
import { getFirestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
// import { getProductos } from '../../getProducts';
// import { getProductos } from '../../getProducts';
// import Loader from '../loader/loader'


const ItemDetailContainer = () => {

    const { detailId } = useParams();
    const [productos, setProductos] = useState({});
    // const [loadingTwo, setLoadingTwo] = useState(true)  //se muestra un loading inicial en true



    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, 'items', detailId);
        getDoc(itemRef).then(snapShot => {
            if (snapShot.exists()) {
                console.log(snapShot.data())
                setProductos(snapShot.data())
            }
        })
    }, [detailId])





    return (
        <>
            <div className='container-fluid row justify-content-center'>
                {
                    // productos ?
                    // loadingTwo ? <Loader /> :
                    <ItemDetail
                        item={productos} />
                    // : "Loading..."
                }
            </div>
        </>
    )

}

export default ItemDetailContainer

