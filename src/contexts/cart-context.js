import { createContext, useContext, useReducer } from "react";
import { initialCartState, cartReducerFunction } from "../reducers/cart-reducer";

const CartContext = createContext(initialCartState);

const CartProvider = ({ children }) => {
    const [ cartState, cartDispatch ] = useReducer(cartReducerFunction, initialCartState);

    return(
        <CartContext.Provider value={{ cartState, cartDispatch }}>
            { children }
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };