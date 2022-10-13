import styled from 'styled-components';
import {useState} from 'react';
import {BsQuestionCircleFill} from 'react-icons/bs';
import mobileImg from '../images/mobileHelp.jpg'
import {MdChatBubble} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'



const MobileHelp = () => {
  const [openHelp, setOpenHelp] = useState(false)
 
  return (
    <Wrapper>
        <div className='mobile-help-btn'>
            <button className={`${openHelp ? 'noShow' : 'btn'}`}        
                    onClick={() => setOpenHelp(true)}>
                <BsQuestionCircleFill />
            </button> 
        </div>
        {openHelp && 
          <article className='mobile-help-container'>
            <div className="close-btn-container">
              <button className='close-btn' onClick={() => setOpenHelp(false)}>X</button>
            </div>
            <div className='mobile-help-header'>
                <img src={mobileImg} alt="technical assistant" />
                <div>
                  <p>Contact Us Today!</p>
                  <p>We're Here To Help!</p>
                </div>
             </div>
             <div className='mobile-help-content'>
                <ul>
                  <li><a href="!#">Track Orders</a> </li>
                  <li><a href="!#">Returns</a> </li>
                  <li><a href="!#">Store Locator</a> </li>
                  <li><a href="!#">11 Music Lessons</a> </li>
                </ul>

                <button className='help-btn'>
                  <MdChatBubble /><span> Live Chat</span>
                </button>
                
                <button className='help-btn'>
                  <BsFillTelephoneFill /><span> 888-214-4811</span>
                </button>

                <button className='help-btn'>
                  Request a callback
                </button>

                <div className='help-hours'>
                  <p>MON - FRI 5 AM - 9 PM PT</p>
                  <p>SAT - SUN 6 AM - 7 PM PT</p>
                </div>
              </div>
              

            </article>
        
          
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`

    /*  start of question button  */
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 999;

      .btn {
        font-size: 3.5rem;
        border: none;
        border-radius: 50%;
        height: 1em;
        background: #fff;
        margin: 0 .25em .5em 0;
        cursor: pointer ;
      }
      .noShow {
        display: none;
      }
    /*  end of question button  */


    /*  start of help popup  */
   .mobile-help-container {
    position: fixed;
    bottom: 0;
    right: 10px;
    background: white ;
    width: 300px;
    height: 600px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
   }

   .close-btn-container {
      height: 50px;
      background: var(--clr-grey-800);
    }
    .close-btn {
      width: 100%;
      color: white;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      display: grid;
      justify-content: end;
      padding: 8px 20px 0 0;
    }

    .mobile-help-header img{
      position: relative;
      height: 90px;
      width: 100%;
      object-fit: cover;
    }
    .mobile-help-header div {
      position: absolute;
      top: 75px;
      left: 140px;
      text-align: center;
    }
    .mobile-help-header div p {
      margin-bottom: 0;
    }
    .mobile-help-content {
      padding: 20px;
    }
    ul {
      padding-bottom: 1.5em;
    }
    ul li {
      font-size: 1rem;
      padding-bottom: .25em;
      color: red;
    }
    ul li:hover {
      text-decoration: underline;
    }
    a {
      color: red;
    }

    .help-btn{
      width: 100%;
      background: red ;
      color: white;
      border: none;
      font-size: 1.3rem;
      padding: .5em;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-bottom: 1em;
    }
    .help-btn span {
      padding-left: .5em;
      font-size: 1rem;
    }
    .help-hours {
      font-size: .875rem;
      text-align: center;
    }
    .help-hours p {
       margin-bottom: .25em;
    }


    @media (min-width: 960px){
        .mobile-help-btn {
            display: none;
        }
    }

`


export default MobileHelp