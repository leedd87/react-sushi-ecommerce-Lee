import { useState } from "react"

const ItemCounter = ({ onAdd, stock }) => {

    const [count, setCount] = useState(0);


    const encrease = (e) => {

        if (count < stock) {
            setCount(count + 1)
        } else { alert('No hay mas stock') }
    }

    const decrease = (e) => {

        if (count > 1) {
            setCount(count - 1)
        } else { alert('No se puede elegir menos') } //revisar si vale la pena mantener alert
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
                    <button onClick={() => {
                        onAdd(count)
                    }} className="btn btn-primary d-flex justify-content-center mb-3"> Agregar Al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCounter