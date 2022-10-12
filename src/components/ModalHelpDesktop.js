import styled from 'styled-components'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdChatBubble} from 'react-icons/md'

const Modal = ({closeModal}) => {
  return (
 <Wrapper>
    <div className="modal-background">
      <div className="modal-container">
          <div className='modal-close-btn-container'>
            <button className='close-btn' onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-content">
            <div className='modal-content-intro'>
              <p>Hey there.</p>
              <p>We want to help you out.</p>
              <p>Hit us up with your gear questions</p>
            </div>
            <div className="modal-content-contact">
              <p>Give us a call</p>
              <button className='btn'>
                <BsFillTelephoneFill /><span> 888-214-4811</span>
              </button>
              <button className='btn'>
                  Request a callback
              </button>
              <p className='modal-spanish'>Espa&#241;ol <span>877-784-5544</span></p>
            </div>
            <div className='modal-chat'>
                <p>Live Chat</p>
                <button className='btn'>
                  <MdChatBubble /><span> Live Chat</span>
              </button>
              <p>Hours:</p>
              <p>MON - FRI 5 AM - 9 PM PT</p>
              <p>SAT - SUN 6 AM - 7 PM PT</p>

            </div>
          </div>
      </div>
    </div>
  </Wrapper> 
  )
}

const Wrapper = styled.main`

.modal-background {
  width: 100%;
  height: 100%;
  background-color: rgba(31, 41, 55, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900 !important;
}
.modal-container {
  position: absolute;
  right: 0;
  top: 0;
  width: 420px;
  height: 100vh;
  
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
}

.modal-close-btn-container {
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

.modal-content {
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-content-intro {
  padding-top: 2em;
}

.modal-content-intro p{
  text-align: center;
  margin-bottom: 0;
  color: var(--clr-grey-600);
}

.modal-content-contact, .modal-chat {
  text-align: center;
  padding-top: 3em;
  width: 100%;
}

.btn{
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
  margin-bottom: 1.5em;
}
.btn span {
  padding-left: .5em;
  font-size: 1rem;
}
.modal-spanish {
  color: red;
}

`

export default Modal