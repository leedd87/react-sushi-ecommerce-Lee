import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [cantParcial, setCantParcial] = useState(0)
    console.log(cartList)


    const AddToCart = (item) => {

        setTotalCart(totalCart + (item.item.price * item.cantidad))
        setCantParcial(cantParcial + item.cantidad)
        const isInCart = cartList.find(res => res.item.id === item.item.id)

        if (isInCart) {
            isInCart.cantidad = isInCart.cantidad + item.cantidad
            setCartList(cartList)
        } else {
            setCartList([
                ...cartList,
                item
            ])
        }
    };


    const removeItem = (idItemRemove) => {

        setCartList(cartList.filter(data => data.item.id !== idItemRemove.item.id))
        setTotalCart(totalCart - (idItemRemove.item.price * idItemRemove.cantidad))
        setCantParcial(cantParcial - idItemRemove.cantidad)
    }

    const emptyCart = () => {
        setCartList([])
        setTotalCart(0)
        setCantParcial(0)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            cantParcial,
            totalCart,
            AddToCart,
            removeItem,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}


