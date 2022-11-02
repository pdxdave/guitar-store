import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helper'
import { Link } from 'react-router-dom'


const CartTotals = () => {
  const {total_amount} = useCartContext()
  const {productUser, loginWithRedirect} = useUserContext()
  return (

    <Wrapper>
        <div>
            <article>
                <p>total: <span>{formatPrice(total_amount)}</span></p>
            </article>
            
            {productUser
              ? <Link to="/checkout" >
                   <button className='button'>checkout</button> 
                </Link> 
              : <button className='button' type="button" onClick={loginWithRedirect}>login</button>
            }
        </div>
       
    </Wrapper>
    
  )
}

const Wrapper = styled.section`

article {
  padding-top: 1em;
}
  
    display: flex;
    justify-content: center;
    
    @media (min-width: 768px){
        justify-content: flex-end;
    }
    p {
        display: grid;
        grid-template-columns: 150px 1fr;
        font-size: 1.1rem;
    }
    button {
        width: 100%;
        background-color: #449D67;
        color: #fff;
        border: none;
        font-family: inherit;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background .3s ease-in;
    }
    button:hover {
      background: #8CCEA6;
    }
`

export default CartTotals
