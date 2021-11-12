
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";


//cart container

const Cart = () => {

    const { cart, removeItem, emptyCart } = useContext(CartContext);
    // console.log(setCart)

    return (
        <section className='row container-fluid justify-content-center my-5'>
            {cart.length ? (
                cart.map((item) => (
                    <div className='row justify-content-center'>
                        <article key={item.id}>
                            <div>
                                <div className='container'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <h2>{item.name}</h2>
                            </div>
                            <div>
                                <span>{item.count}</span>
                                <span>$ {item.price}</span>
                            </div>
                            <div>
                                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                            </div>
                        </article>
                    </div>
                ))
            ) : (
                <>
                    <h1>No hay productos</h1>
                </>
            )}
            {cart.length ? (
                <button onClick={() => emptyCart()}>
                    Eliminar todo el carrito
                </button>
            ) : (
                <Link to='/'>
                    <button>Volver</button>
                </Link>
            )}
        </section>

    )
}

export default Cart;
