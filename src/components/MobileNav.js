import {Link} from 'react-router-dom';
import {navLinks} from '../utils/misc';
import {FaTimes} from 'react-icons/fa'
import logo from '../images/logo.svg'
import styled from 'styled-components';
import { useMobileContext } from '../context/nav_context';
import CartButtons from './CartButtons';

const MobileNav = () => {
    const {isMobileOpen, closeMobile} = useMobileContext()
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
                    return <li key={id}>
                        <Link to={url} onClick={closeMobile}>{text}</Link>
                    </li>
                })}
            </ul>
            <div className='test'>
                <CartButtons />
            </div>
        </div>
       
    </Wrapper>
  )
}

const Wrapper = styled.div`

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

    .links a {
    display: block;
    text-align: left;
    font-size: 1.2rem;
    color: gray;
    text-transform: capitalize;
    padding: 1rem 2.2rem;
  }

    .mobile {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #fff;
        transform: translate(-100%);
        transition: 0.3s ease-in-out;
    }
    .show-mobile {
        transform: translate(0);
        z-index: 999;
    }

    .close-btn {
        background: transparent;
        border: none;
        font-size: 1.5rem;
        cursor:pointer;
    }

    @media screen and (min-width: 960px) {
    .mobile {
      display: none;
    }

`

export default MobileNav