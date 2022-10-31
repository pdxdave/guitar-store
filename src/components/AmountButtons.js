import React from 'react'
import styled from 'styled-components'

const AmountButtons = ({increase, decrease, amount}) => {
  return (
    <Wrapper>
            
        <button type="button" onClick={decrease}>-</button>
        <p>{amount}</p>
        <button type="button" onClick={increase}>+</button>
           
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: grid;
    width: 120px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;

    button {
        background: transparent;
        border: none;
        font-size: 2em;
        cursor: pointer;
        width: 1em;
    }
    p {
        font-size: 1.5rem;
        margin: 0;
    }

    @media (max-width: 500px){

        max-width: 80px;

        button {
            font-size: 1.3rem;
        }
        p {
            font-size: 1rem;
        }

    }

    
`
export default AmountButtons