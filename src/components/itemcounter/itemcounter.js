import { useState } from "react"

const ItemCounter = ({ initial, stock, agregarCarrito }) => {

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

    const agregar = () => {
        if (count !== 0) {
            agregarCarrito(count)
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
                    {/* al hacer click el boton agregar carrito se muestra "btn ver carrito" */}
                    <button onClick={agregar} className="btn btn-primary d-flex justify-content-center mb-3"> Agregar Al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCounter