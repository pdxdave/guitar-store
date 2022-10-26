import {
    LOAD_PRODUCTS,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
} from '../actions'

const filter_reducer = (state, action) => {
    
    // INITIAL PROPERTY LOADING
    if(action.type === LOAD_PRODUCTS){

        let maxPrice = action.payload.map((prod) => prod.price)
        maxPrice = Math.max(...maxPrice)

        return {
            ...state,
            all_products: [...action.payload],
            filtered_products: [...action.payload],
            filters: {...state.filters, max_price: maxPrice, price: maxPrice, brand: 'all'}
        }
    }

    // UPDATE SORT
    if(action.type === UPDATE_SORT){
        return {
            ...state,
            sort: action.payload
        }
    }

    //SORT BY PRICE
    if(action.type === SORT_PRODUCTS){
        const {sort, filtered_products} = state
        // if nothing is sorted, it will return existing properties instead of an empty array
        let tempProducts = [...filtered_products]
        if(sort === 'price-lowest'){
            tempProducts = tempProducts.sort((a, b) => a.price - b.price)
        }
        if(sort === 'price-highest'){
            tempProducts = tempProducts.sort((a, b) => b.price - a.price)
        }
        return {...state, filtered_products: tempProducts}
    }


    // UPDATE FILTERS
    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload 
        return {...state, filters: {...state.filters, [name]: value}}
    }


    // FILTER PRODUCTS
    if(action.type === FILTER_PRODUCTS){
        const {all_products} = state 
        const {price, brand} = state.filters 

        let tempProducts = [...all_products]
        // brand
        if(brand !== 'all'){
            tempProducts =
            tempProducts.filter((banana) => banana.brand === brand)
        }

        // price
        tempProducts = tempProducts.filter((banana) => banana.price <= price)

        return {
            ...state,
            filtered_products: tempProducts
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)

}

export default filter_reducer;