import React, {useEffect, useContext, useReducer} from 'react';
import reducer from '../reducers/filter_reducer';

import {
   LOAD_PRODUCTS,
   UPDATE_SORT,
   SORT_PRODUCTS,
   UPDATE_FILTERS,
   FILTER_PRODUCTS
} from '../actions'

import { useProductsContext } from './product_context';

const initialState = {
    filtered_products: [],
    all_products: [],
    sort: 'price-lowest',
    filters: {
        brand: 'all',
        min_price: 0,
        max_price: 0,
        price: 0
    },
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {guitar_products} = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    // INITIAL PRODUCTS LOADING
    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: guitar_products})
    }, [guitar_products])

    // when product or state changes
    useEffect(() => {
        dispatch({ type: FILTER_PRODUCTS}) // second
        dispatch({ type: SORT_PRODUCTS}) // first
    }, [guitar_products, state.sort, state.filters])


    // SORT BY PRICE
    const updateSort = (e) => {
        const value = e.target.value
        dispatch({ type: UPDATE_SORT, payload: value})
    }

    // FILTERS
    const updateFilters = (e) => {
        let name = e.target.name 
        let value = e.target.value 
        if(name === 'brand'){
            value = e.target.textContent
        }

        dispatch({ type: UPDATE_FILTERS, payload: {name, value}})
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort,
            updateFilters
        }}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterContext = () => {
    return useContext(FilterContext)
}