import { createContext, useState } from "react";

//cambio de nombre para prueba
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); //Array de objetos o solo array probando
    console.log('cart', cart)

    const addItem = (item, quantity) => {
        const newItem = { ...item, counter: quantity };
        const isInCart = cart.some((product) => product.id === item.id)
        if (!isInCart) {
            setCart([...cart, newItem]);
            console.log(cart);
        } else {
            const foundedItem = cart.find((product) => product.id === item.id);
            foundedItem.counter = foundedItem.counter + quantity;
        }

    };


    const removeItem = (id) => {
        // const refreshProd = cart.filter((item) => item.id !== id);
        // setCart(refreshProd);
        // console.log(cart, 'producto eliminado');
        setCart(cart.filter((item) => item.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }



    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}


