
import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_CART_PRODUCT,
    TOGGLE_CART_PRODUCT_AMOUNT
} from '../actions'


const cart_reducer = (state, action) => {

    // ADD TO CART
    if(action.type === ADD_TO_CART){
        const {id, amount, product} = action.payload 
        const tempItem = state.cart.find((item) => item.id === id)

        if(tempItem){
            // check to see if item is already in the cart
            const tempCart = state.cart.map((cartItem) => {
                if(cartItem.id === id){
                    let newAmount = cartItem.amount + amount
                    if(newAmount > cartItem.max){
                        newAmount = cartItem.max
                    }
                    return {...cartItem, amount: newAmount}
                } else {
                    return cartItem
                }
            })
            return {...state, cart: tempCart}
        } else {
            const newItem = {
                id: id,
                name: product.name,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            return {...state, cart:[...state.cart, newItem]}
        } 
    }

    // REMOVE CART PRODUCT
    if(action.type === REMOVE_CART_PRODUCT){
        const tempCart = state.cart.filter((product) => product.id !== action.payload)
        return {
            ...state,
            cart: tempCart
        }
    }

    // TOGGLE CART PRODUCT AMOUNT
    if(action.type === TOGGLE_CART_PRODUCT_AMOUNT){
        const {id, value} = action.payload
        const tempCart = state.cart.map((product) => {
            if(product.id === id) {
                if(value === 'increase'){
                    let newAmount = product.amount + 1
                    if(newAmount > product.max){
                        newAmount = product.max
                    }
                    return {...product, amount: newAmount}
                }
                if(value === 'decrease'){
                    let newAmount = product.amount - 1
                    if(newAmount < 1){
                        newAmount = 1
                    }
                    return {...product, amount: newAmount}
                }
            }
            return product
        })
        return {...state, cart: tempCart}
    }

    // COUNT CART TOTALS
    if(action.type === COUNT_CART_TOTALS){
        const {total_items, total_amount} = state.cart.reduce((total, cartItem) => {
            const {amount, price} = cartItem
            total.total_items += amount
            total.total_amount += price * amount
            return total
        }, {
            total_items: 0,
            total_amount: 0
        })
        return {...state, total_items, total_amount}
    }

    // CLEAR CART
    if(action.type === CLEAR_CART){
        return {
            ...state,
            cart: []
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer