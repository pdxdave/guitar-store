import React, {useReducer, useContext, useEffect} from 'react';
import { products_url as url } from '../utils/misc';
import axios from 'axios'
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions'

// import reducer from '../reducers/product_reducer'

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    guitar_products: [],
    amp_products: [],
    pedal_products: []
}
 
let url = 'http://localhost:8888/api/products'

const ProductsContext = React.createContext()

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

   

    // GET ALL PRODUCTS
    const fetchProducts = async (url) => {
        dispatch({ type: GET_PRODUCTS_BEGIN})
        try {
            const response = await axios(url)
            const products = response.data
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products})
            // console.log(products)
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR})
        }
    }

    useEffect(() => {
        fetchProducts(url)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <ProductsContext.Provider value={{
            ...state 
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}