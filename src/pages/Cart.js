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
                    <Link to="/">
                        <button className='btn'>You need to shop</button>
                    </Link>
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
.btn {
    width: 200px;
    font-family: inherit;
    font-size: 1rem;
    background: #449D67;
    border: none;
    color: #fff;
    padding: .25em 0;
    cursor: pointer;
    transition: background .3s ease-in;
  }
  .btn:hover {
    background: #8CCEA6;
  } */
`
export default Cart