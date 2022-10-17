import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions'

const products_reducer = (state, action) => {

    if(action.type === GET_PRODUCTS_BEGIN){
        return {
            ...state,
            products_loading: true
        }
    }
    if(action.type === GET_PRODUCTS_SUCCESS){
        const guitar_products = action.payload.filter((product) => product.type === 'guitar')
        const amp_products = action.payload.filter((product) => product.type === 'amp')
        const pedal_products = action.payload.filter((product) => product.type === 'pedal')
        return {
            ...state,
            products_loading: false,
            products: action.payload,
            guitar_products,
            amp_products,
            pedal_products
        }
    }
    if(action.type === GET_PRODUCTS_ERROR){
        return {
            ...state,
            products_loading: false,
            products_error: true
        }
    }

    throw new Error(`No Matching "${action.type}" - action-type`)
}

export default products_reducer