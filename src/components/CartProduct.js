import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helper'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'

const CartItem = ({ id, image, name, price, amount }) => {
  const { removeProduct, toggleProductAmt } = useCartContext()

  const increase = () => {
    toggleProductAmt(id, 'increase')
  }
  const decrease = () => {
    toggleProductAmt(id, 'decrease')
  }

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeProduct(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}


const Wrapper = styled.article`

.subtotal {
    display: none;
}
.price {
    display: none;
}


display: grid;
grid-template-columns: 200px auto auto;
grid-template-rows: 75px;
justify-items: center;
align-items: center;
margin-bottom: 3em;
gap: 3em 1em;

img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
}
.name {
    color: var(--clr-grey-600);
}
.title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    gap: 1em;
}


h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
    font-weight: 400;
}

button {
    background: transparent;
    border: none;
    font-size: 1rem;
}

@media (min-width: 776px){

    button {
        font-size: 1.3rem;
    }

    .subtotal {
        display: block;
        margin-bottom: 0;
        font-weight: 400;
        font-size: 1rem;
    }
    .price-small {
        display: none;
    }
    .price {
        display: block;
        font-size: 1rem;
        font-weight: 400;
    }
    .name {
        font-size: 0.85rem;
    }

    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
        height: 100%;
    }

    .title {
        height: 100%;
        display: grid;
        grid-template-columns: 100px 200px;
        align-items: center;
        gap: 1rem;
       
    }
}
`

export default CartItem
