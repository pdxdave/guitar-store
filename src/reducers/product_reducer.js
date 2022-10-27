import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    PATH_UPDATE,

    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR

} from '../actions'

const products_reducer = (state, action) => {
    

    // GET ALL PRODUCTS
    if(action.type === GET_PRODUCTS_BEGIN){
        return {
            ...state,
            products_loading: true
        }
    }
    if(action.type === GET_PRODUCTS_SUCCESS){
        const products_line = action.payload.filter((product) => product.type === state.products_path)
        return {
            ...state,
            products_loading: false,
            products: action.payload,
            products_line,
        }
    }
    if(action.type === GET_PRODUCTS_ERROR){
        return {
            ...state,
            products_loading: false,
            products_error: true
        }
    }
    //


    if(action.type === PATH_UPDATE){
        return {
            ...state, 
            products_path: action.payload
        }
    }

    // GET SINGLE PROODUCT
    if(action.type === GET_SINGLE_PRODUCT_BEGIN){
        return {
            ...state,
            single_product_error: false,
            single_product_loading: true
        }
    }
    if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
        return {
            ...state,
            single_product_loading: false,
            single_product: action.payload
        }
    }
    if(action.type === GET_SINGLE_PRODUCT_ERROR){
        return {
            ...state,
            single_product_loading: false,
            single_product_error: true
        }
    }


    throw new Error(`No Matching "${action.type}" - action-type`)
}

export default products_reducer