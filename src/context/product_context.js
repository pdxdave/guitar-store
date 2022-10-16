import React, {useReducer, useConext, useEffect} from 'react'
import axios from 'axios'
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions'

const initialState = {
    products_loading: false,
    products_error: false,
    products: []
}
import reducer from '../reducers/product_reducer'

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ProductsContext.Provider value={{
            ...state 
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useConext(ProductsContext)
}