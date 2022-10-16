import {
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions'

const products_reducer = (state, action) => {

    throw new Error(`No Matching "${action.type}" - action-type`)
}

export default products_reducer