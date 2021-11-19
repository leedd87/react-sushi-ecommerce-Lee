import React, { useState, useEffect } from 'react';

import Item from '../items/items';
import { useParams } from "react-router-dom";
// import Loader from '../loader/loader';

import { getDocs, getFirestore } from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";



const ItemListContainer = ({ categoryHome }) => {
    // const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);
    console.log(productos)



    useEffect(() => {

        const db = getFirestore();
        let q = query(collection(db, 'items'));

        if (!categoryId) {
            getDocs(q).then((snapShot) => {
                setProductos(snapShot.docs.map((doc) => doc.data()));
            });
        } else {
            const q = query(collection(db, "items"),
                where("category", "==", categoryId)
            );
            getDocs(q).then((snapShot) => {
                setProductos(snapShot.docs.map((doc) => doc.data()))
            });
        }
    }, [categoryId]);




    return (

        <div className='container-fluid row justify-content-center'>
            {
                // loading ?
                //     <div>
                //         <Loader />
                //     </div>
                //     :
                // productos &&
                productos.map((productos) => (
                    <Item producto={productos} key={productos.name} />
                ))
            }
        </div>


    )
}

export default ItemListContainer