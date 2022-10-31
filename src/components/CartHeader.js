import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
  return (
    <Wrapper>
        <div className="cartDescription">
            <h5>item</h5>
            <h5>price</h5>
            <h5>quantity</h5>
            <h5>subtotal</h5>
            <span></span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: none;
    @media(min-width: 776px){
        display: block;
        .cartDescription {
            display: grid;
            justify-items: center;
            grid-template-columns: 300px 1fr 1fr 1fr auto;
            column-gap: 1rem;
        }
        h5 {
            font-weight: 300;
        }
    }
`

export default CartColumns
