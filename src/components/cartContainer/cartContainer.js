
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { CheckOutForm } from "../forms/checkOutForm"

const Cart = () => {
    const { totalCart, cartList, emptyCart, removeItem, cantParcial } = useContext(CartContext);
    console.log(cartList);

    return totalCart === 0 ? (
        <>
            <h1>No hay productos</h1>
            <Link to="/">
                <button>Volver</button>
            </Link>
        </>
    ) : (
        <section className="row container-fluid justify-content-center my-5">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Categoria</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map(
                        (
                            item //problema con el map
                        ) => (
                            <tr key={item.item.id}>
                                <td>
                                    <img
                                        src={item.item.img}
                                        alt="imagen"
                                        style={{ width: 200, height: 100 }}
                                    />
                                </td>
                                <td>{item.item.category}</td>
                                <td>{item.item.name}</td>
                                <td>{item.cantidad}</td>
                                <td>$ {item.item.price * item.cantidad}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeItem(item)}>
                                        {" "}
                                        X
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>
                                Limpiar carrito
                            </button>
                        </td>
                        <td>
                            <button>
                                <Link to="/">Seguir comprando</Link>
                            </button>
                        </td>
                        <td>

                        </td>

                        <td>${totalCart}</td>



                    </tr>
                    <div className='container-fluid justify-content-center'>
                        <br />
                        <CheckOutForm finalPurchase={cantParcial} totalCompra={totalCart} deleteCart={emptyCart} />
                    </div>
                </tbody>
            </table>
        </section>
    );
};

export default Cart;
