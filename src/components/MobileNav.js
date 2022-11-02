import {Link} from 'react-router-dom';
import {navLinks} from '../utils/misc';
import {FaTimes} from 'react-icons/fa'
import logo from '../images/logo.svg'
import styled from 'styled-components';
import { useMobileContext } from '../context/nav_context';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/product_context';
import { useUserContext } from '../context/user_context';

const MobileNav = () => {
    const {isMobileOpen, closeMobile} = useMobileContext()
    const {productUser} = useUserContext()

    const {
      pathUpdate
    } = useProductsContext()
    
  return (
    <Wrapper>
        <div className={`${isMobileOpen ? 'mobile show-mobile' : 'mobile'}`}>
            
            <div className="nav-header">
                <Link to="/" className='nav-header__group'>
                    <img src={logo} alt="company logo" className='nav-logo'/>
                    <div>
                       <h4 className='nav-company-name'>11 Music</h4>
                       <span className='nav-company-subtitle'>"When 10 Isn't Enough"</span>
                    </div>
                   
                </Link>
                <button className='close-btn' type="button">
                    <FaTimes onClick={closeMobile}/>
                </button>
            </div>
            <ul className="links">
                {navLinks.map(({id, text, url}) => {
                    return <li key={id} >
                        <Link  to={url}  onClick={closeMobile} >
                            <button type="button" name={text}  onClick={pathUpdate} >{text}</button>
                        </Link>
                    </li>
                })}
                {productUser && (
                  <li className='checkout'>
                    <Link to="/checkout" onClick={closeMobile}>Checkout</Link>
                  </li>
                )}
            </ul>
            <div className='test'>
                <CartButtons />
            </div>
        </div>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`

button {
  font-family: inherit;
  font-size: 1.2rem;
  text-transform: capitalize;
  padding: .15em;
  margin: .5em 0 .5em 1em;


  /* display: block; */
    text-align: left;
    /* font-size: 1.2rem; */
    color: gray;
    /* text-transform: capitalize; */
    /* padding: 1rem 2.2rem; */
  background: transparent;
  border: none;

}

.test {
    margin-left: 35%;
}

.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2.2em;
  }

  /**** */
  .nav-header__group {
    display: flex;
    align-items: center;
  }
  .nav-logo {
    width: 70px;
    height: 70px;
    margin-right: 1em;
  }
  .nav-company-name {
    color: red;
    margin-bottom: 0;
  }
  .nav-company-subtitle {
    font-size: .75rem;
    color: var(--clr-grey-600);
  }
  /**** */

  .links {
        margin-bottom: 2rem;
    }

    .close-btn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor:pointer;
    }

    .checkout {
      font-size: 1.2rem;
      padding: .25em 0 0 1em;
      
      a {
        color: gray;
      }
    }
    @media screen and (min-width: 960px) {
    .mobile {
      display: none;
    }
  }
`

export default MobileNav