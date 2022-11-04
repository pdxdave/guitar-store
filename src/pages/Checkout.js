import styled from 'styled-components'
import {StripeCheckout} from '../components'

import { useCartContext } from '../context/cart_context';
import {Link} from 'react-router-dom'


const Checkout = () => {
  const {cart} = useCartContext()

  return (
    <Wrapper className='page-setting page-clear'>
       {cart.length < 1 
        ? <div><h2>Cart is empty</h2>
            <Link to="/">
              <button>You need to shop</button>
            </Link>
          </div> 
        : <StripeCheckout />}
    </Wrapper>
  )

}

const Wrapper = styled.div`
`


export default Checkout