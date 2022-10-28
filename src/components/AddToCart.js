import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/cart_context';
import AmountButtons from './AmountButtons';

const AddToCart = ({product}) => {
  const {addToCart} = useCartContext()
  const {id, stock} = product
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if(tempAmount > stock){
        tempAmount = stock
      }
      return tempAmount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if(tempAmount < 1){
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons 
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link to="/cart" className='btn-cart' onClick={() => addToCart(id, amount, product)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.btn-cart {
  font-size: 1.3rem;
  text-transform: capitalize;
  border: var(--clr-grey-400);
  padding: .25em .5em;
  border-radius: 4px;
  background-color: var(--clr-grey-400);
  color: #fff;
}

`

export default AddToCart