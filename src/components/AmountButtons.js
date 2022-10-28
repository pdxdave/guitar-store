import React from 'react'
import styled from 'styled-components'

const AmountButtons = ({increase, decrease, amount}) => {
  return (
    <Wrapper>
            <div className="btn-container">
                <button className="btn" type="button" onClick={decrease}>-</button>
                <h2 className='amount'>{amount}</h2>
                <button className="btn" type="button" onClick={increase}>+</button>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`


.btn-container {
    width: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
}
.btn {
    font-family: inherit;
    font-size: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
}

.amount {
    padding: 0 .5em;
    font-size: 2rem;
}

    
`
export default AmountButtons