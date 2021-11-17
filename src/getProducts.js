import { productos } from "./products";


export const getProductos = new Promise((resolve, reject) => {

    resolve(productos)

})