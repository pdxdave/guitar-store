import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import CartHeader from './CartHeader'
import CartProduct from './CartProduct'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart, clearCart} = useCartContext()

  return (
    <Wrapper className='section page-setting'>
      <CartHeader />
      {cart.map((item) => {
        return <CartProduct key={item.id} {...item} />
      })}
      <div className='link-container'>
        
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
  .link-container {
    display: flex;
    justify-content: right;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    font-size: 1rem;
    border: 1px solid var(--clr-grey-300);
    padding: .5em;
    background: var(--clr-grey-300);
    border-radius: 4px;
  }
`
export default CartContent
