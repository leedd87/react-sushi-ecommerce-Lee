import { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const ItemCounter = ({ initial, stock, onAdd, item }) => {

    const [count, setCount] = useState(initial);
    const { addItem } = useContext(CartContext)
    const encrease = () => {
        if (count >= initial && count < stock) {
            setCount(count + 1)
        }
    }

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        if (count !== 0) {
            onAdd(count)
            addItem(item, count)
        }
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <div className='d-flex justify-content-center pb-3'>
                    <button onClick={decrease}>-</button>
                    <p>{count}</p>
                    <button onClick={encrease}>+</button>
                </div >
                <div>
                    <button onClick={agregar} className="btn btn-primary d-flex justify-content-center mb-3"> Agregar Al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCounter