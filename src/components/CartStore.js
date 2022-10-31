import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartHeader from './CartHeader'
import CartProduct from './CartProduct'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart, clearCart} = useCartContext()

  return (
    <Wrapper className='page-setting page-clear'>
      <CartHeader />
      {cart.map((item) => {
        return <CartProduct key={item.id} {...item} />
      })}
      
      <div className='clear-cart'>
          <button
            type='button'
            className='link-btn clear-btn'
            onClick={clearCart}
            >
            clear shopping cart
        </button>
        </div>
      <CartTotals />
    </Wrapper>
  )
}
const Wrapper = styled.section`

  .clear-cart {
    display: flex;
    justify-content: flex-end;
  }
  button {
    font-size: 1rem;
    padding: .25em;
  }
`
export default CartContent
