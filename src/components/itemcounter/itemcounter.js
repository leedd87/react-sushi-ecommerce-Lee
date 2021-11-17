import { useState } from "react"
// import { useContext } from "react";
// import { CartContext } from "../../context/cartContext";

const ItemCounter = ({ onAdd, stock }) => {

    const [count, setCount] = useState(0);
    // const { addItem, updateItemsInCart } = useContext(CartContext)

    const encrease = () => {
        if (count < stock) {
            setCount(count + 1)
            // if (!showBtn) {
            //     addItem(item, 1);
            //     updateItemsInCart(item, -1)
            // }
        } else { alert('No hay mas stock') }
    }

    const decrease = () => {
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
                {/* <p className=" my-3"> Cantidad: {count}</p> */}
            </div>
        </>
    )
}

export default ItemCounter