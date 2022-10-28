import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {Link} from 'react-router-dom'
import { CartStore } from '../components'

const Cart = () => {
    const {cart} = useCartContext()

    if(cart.length < 1){
        return (
            <Wrapper className='page-clear'>
                <div className='empty-cart-msg'>
                    <h3>Hey, there's nothing here!</h3>
                    <Link to="/">Home</Link>
                </div>
            </Wrapper>
        )
    }
  
    return (
        <main>
            <Wrapper>
                <CartStore />
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.section`

.empty-cart-msg {
    text-align: center;
    padding: 5em 0;
}
`
export default Cart