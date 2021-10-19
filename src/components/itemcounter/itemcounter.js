import { useState } from "react"

const ItemCounter = ({ initial, stock }) => {

    const [count, setCount] = useState(0);

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

    return (
        <div className='d-flex justify-content-center pb-3'>
            <button onClick={decrease}>-</button>
            <p>{count}</p>
            <button onClick={encrease}>+</button>
        </div >
    )
}

export default ItemCounter