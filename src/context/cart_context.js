import React, {useEffect, useContext, useReducer} from 'react';
import reducer from '../reducers/cart_reducer';

import {
    ADD_TO_CART,
    REMOVE_CART_PRODUCT,
    TOGGLE_CART_PRODUCT_AMOUNT,
    CLEAR_CART,
    COUNT_CART_TOTALS
} from '../actions'


// GET LOCAL STORAGE
const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart){
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const initialState = {
    cart: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
}

const CartContext = React.createContext()

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // ADD TO CART
    const addToCart = (id, amount, product) => {
        dispatch({ type: ADD_TO_CART, payload: {id, amount, product}})
    }
    
    // REMOVE FROM CART
    const removeProduct = (id) => {
        dispatch({ type: REMOVE_CART_PRODUCT, payload: id})
    }

    // LOCAL STORAGE
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])


    // TOGGLE_PRODUCT_AMOUNT
    const toggleProductAmt = (id, value) => {
        dispatch({ type: TOGGLE_CART_PRODUCT_AMOUNT, payload: {id, value}})
    }

    // LOCAL STORAGE for count totals
    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS})
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    // CLEAR CART
    const clearCart = () => {
        dispatch({type: CLEAR_CART})
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeProduct,
            toggleProductAmt,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}