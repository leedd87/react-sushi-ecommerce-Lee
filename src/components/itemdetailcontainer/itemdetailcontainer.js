import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemdetail/itemDetail';
import { getFirestore } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const { detailId } = useParams();
    const [productos, setProductos] = useState({});

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', detailId);
        getDoc(itemRef).then(snapShot => {
            if (snapShot.exists()) {
                console.log(snapShot.data())
                setProductos(snapShot.data())
            }
        })
        console.log(db)
    }, [detailId])


    return (
        <>
            <div className='container-fluid row justify-content-center'>
                {


                    <ItemDetail
                        item={productos} />

                }
            </div>
        </>
    )

}

export default ItemDetailContainer

