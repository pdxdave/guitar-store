import React, {useReducer, useContext, useEffect} from 'react';
import { products_url as url } from '../utils/misc';
import axios from 'axios'
import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    PATH_UPDATE,

    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR

} from '../actions'

import reducer from '../reducers/product_reducer'

const initialState = {
    products_loading: false,
    products_error: false,
    products: [],
    products_line: [],

    products_path: 'guitar',

    single_product_loading: false,
    single_product_error: false,
    single_product: [],
}

 
// let url = 'http://localhost:8888/api/products'

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
        } catch (error) {
            dispatch({ type: GET_PRODUCTS_ERROR})
        }
    }


     useEffect(() => {
        fetchProducts(url)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.products_path])
    

    const pathUpdate = (e) => {
        let name = e.target.name
        name = name.slice(0,-1)
        dispatch({ type: PATH_UPDATE, payload: name})
    }

    // GET SINGLE PRODUCT
    const fetchSingleProduct = async (pp) => {
            dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
        try {
            const response = await axios.get(pp)
            const singleProduct = response.data 
            dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct})
        } catch (error) {
            dispatch({type: GET_SINGLE_PRODUCT_ERROR})
        }
    }

    return (
        <ProductsContext.Provider value={{
            ...state,
            pathUpdate,
            fetchSingleProduct
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext)
}