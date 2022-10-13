import styled from 'styled-components';
import face from '../images/help_face.jpg';
import {Link} from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import {navLinks} from '../utils/misc';
import logo from '../images/logo.svg'
import CartButtons from './CartButtons';
import ModalHelpDesktop from './ModalHelpDesktop';
import {useState} from 'react';
import { useMobileContext } from '../context/nav_context';
import SubNav from './SubNav';


const Navbar = () => {
    const [openModal, setOpenModal] = useState(false)
    const {openMobile} = useMobileContext()
  return (
     <>
    {openModal && <ModalHelpDesktop closeModal={setOpenModal}/>}
    <Wrapper>
        <div className="nav-container">
            <div className="nav-header">
                <Link to="/" className='nav-header__group'>
                    <img src={logo} alt="company logo" className='nav-logo'/>
                    <div>
                      <h4 className='nav-company-name'>11 Music</h4>
                      <span className='nav-company-subtitle'>"When 10 Isn't Enough"</span>
                    </div>
                    
                </Link>
                <button className='nav-toggle' onClick={openMobile}>
                    <FiMenu />
                </button>
            </div>
        
        <ul className="nav-links">
            {navLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          {/* */}
            <div style={{display: "flex"}}>
                <div className="cart-help" onClick={() => setOpenModal(true)}>
                    <img src={face} alt="help face" />
                      <div>
                          <p>Live Help</p>
                          <p>(360)-784-5944</p>
                      </div>
                    </div>
                <CartButtons />
            </div>

          {/* */}
           
         </div> 
         
      </Wrapper>
      <SubNav />
    </>
  )
}

const Wrapper = styled.nav`
/*  initial nav-setup */
  position: sticky;
  top: 0;
  height: 7em;
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: #fff;
  /* border-bottom: 1px solid red;  */

  /*  set nav width  */
  .nav-container {
    width: 95vw;
    max-width: 1400px;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
  .nav-toggle {
    background: transparent;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .nav-links, .cartBtns, .cart-help {
    display: none;
  }

  @media (min-width: 960px){
    .nav-container {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      text-transform: capitalize;
      li {
        padding: 0 0.5em;
        a {
            font-size: 1.2rem;
            color: var(--clr-grey-600);
        }
      }
    }
    .nav-toggle {
      display: none;
    }
    .cartBtns {
      display: grid;
    }

  .cart-help {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    width: 200px;
    cursor: pointer;
    align-items: center;
    background-color: transparent;
    border: none;
    text-align: left;
  }

  p {
    font-size: 0.74rem;
    margin-bottom: 0.25em;
    font-weight: bold;
    color: var(--clr-grey-600);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

}
`
export default Navbar