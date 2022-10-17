import React, {useEffect, useContext, useReducer} from 'react';
import reducer from '../reducers/filter_reducer';

import {
   LOAD_PRODUCTS 
} from '../actions'
import { useProductsContext } from './product_context';

const initialState = {
    filtered_products: [],
    all_products: []
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {guitar_products} = useProductsContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: LOAD_PRODUCTS, payload: guitar_products})
    }, [guitar_products])

    return (
        <FilterContext.Provider value={{
            ...state,
        }}>
            {children}
        </FilterContext.Provider>
    )

}

export const useFilterContext = () => {
    return useContext(FilterContext)
}