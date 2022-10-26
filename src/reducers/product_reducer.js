import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    PATH_UPDATE

} from '../actions'

const products_reducer = (state, action) => {
    

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
    if(action.type === PATH_UPDATE){
        return {
            ...state, 
            products_path: action.payload
        }
    }

    throw new Error(`No Matching "${action.type}" - action-type`)
}

export default products_reducer