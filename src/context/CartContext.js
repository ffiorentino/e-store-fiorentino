import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const addProductToCart = (item) => {
        let isInCart = cartProducts.find(cartItem => cartItem.id === item.id)
        if(!isInCart) {
            console.log("item:", item)
            setTotalProducts(totalProducts + item.cantidad)
            setCartProducts(cartProducts => [...cartProducts, item])
        }
        else {
            let index = cartProducts.findIndex(el => el.id === item.id);
            let product = cartProducts[index];
            product.cantidad = product.cantidad + item.cantidad;

            const newCart = [...cartProducts];
            newCart.splice( index, 1, product );

            setTotalProducts(totalProducts + item.cantidad)
            setCartProducts([ ...newCart ]);                    
        }
    }

    const deleteProduct = (item) => {
        setCartProducts(cartProducts.filter( (cartProduct) => cartProduct.id !== item.id) )
        setTotalProducts(totalProducts - item.cantidad)
    }

    const clear = () => {
        setCartProducts([])
        setTotalProducts(0)
    }

    const sumaPrecioItems = () => {
        return cartProducts.reduce((acum, valor) => (acum +(valor.cantidad * valor.price)), 0)
    }      

    const data = {
        cartProducts,
        setCartProducts,
        deleteProduct,
        clear,
        addProductToCart,
        totalProducts,
        sumaPrecioItems
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }