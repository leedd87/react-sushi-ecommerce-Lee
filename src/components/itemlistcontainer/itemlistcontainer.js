import React from 'react';
import sushi1 from '../../images/sushi1.jpg'
import Item from '../items/items';

const ItemListContainer = () => {
    return (
        <>
            <Item img={sushi1} title='CaliRoll' price='$10' />
        </>
    )
}

export default ItemListContainer