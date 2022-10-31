import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
// import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helper'
// import { Link } from 'react-router-dom'


const CartTotals = () => {
  const {total_amount} = useCartContext()
  return (

    <Wrapper>
        <div>
            <article>
                <p>total: <span>{formatPrice(total_amount)}</span></p>
            </article>
            <button>check out</button>
            {/* {myUser 
              ? <Link to="/checkout" className='btn'>
                   proceed to checkout
                </Link> 
              : <button className='btn' type="button" onClick={loginWithRedirect}> login </button>
            } */}
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

// const Wrapper = styled.section`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   article {
//     /* border: 1px solid var(--clr-grey-8);
//     border-radius: var(--radius); */
//     padding: 1.5rem 3rem;
//   }
//   h4,
//   h5,
//   p {
//     display: grid;
//     grid-template-columns: 200px 1fr;
//   }
//   p {
//     text-transform: capitalize;
//   }
//   h4 {
//     margin-top: 2rem;
//   }
//   @media (min-width: 776px) {
//     justify-content: flex-end;
//   }
//   .btn {
//     width: 100%;
//     margin-top: 1rem;
//     text-align: center;
//     font-weight: 700;
//   }
// `

export default CartTotals
