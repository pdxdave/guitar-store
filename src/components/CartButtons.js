import { BsTruck } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BsFillPersonFill} from 'react-icons/bs';

import { useCartContext } from "../context/cart_context";

import { useMobileContext } from "../context/nav_context";

const CartButtons = () => {
  const {total_items} = useCartContext()
  const {closeMobile} = useMobileContext()



    return (
        <Wrapper className="cartBtns" >
          <Link to="/cart" className="cart-btn"  onClick={closeMobile} style={{display: 'flex', flexDirection: 'column', marginBottom: '-4px'}}>
            <span className="cart-wrapper">
              <BsTruck />
             
              <span className="cart-value">{total_items}</span>
            </span>
             <span style={{fontSize: '.8rem', display: 'inline-block'}}>Cart</span>
          </Link>
          <button type="button" className="auth-btn">
            <BsFillPersonFill />
            <span>Login</span>
          </button>
        </Wrapper>
      );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  width: 160px;

  .cart-btn {
    /* effects both icon and number */
    color: var(--clr-grey-800);
    font-size: 2.2rem;
    display: flex;
    align-items: center;
  }

  .cart-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 .25em;
  }
  .cart-value {
    position: absolute;

    height: 24px;
    width: 24px;
    border: 1px solid red;

    top: -13px;
    right: -5px;

    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: red;
    border-radius: 50%;
  }

  .auth-btn {
    font-size: 2.5rem;
    background: transparent;
    border: none;
    padding: 0 0 0 .5em;
    cursor: pointer;
    color: var(--clr-grey-800);
  }
  .auth-btn span {
    font-size: .8rem;
    display: block;
    margin-top: -10px;
    color: var(--clr-grey-800);
  }
`

export default CartButtons