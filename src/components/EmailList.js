import React from 'react'
import styled from 'styled-components'

const EmailList = () => {
  return (
    <Wrapper>
        <h5>Join our mailing list for the latest deals and updates</h5>
        <form>
            <label htmlFor="email">
                <input type="email" placeholder='email address'/>
            </label>
            <button>Sign Up</button>
        </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
    
        max-width: 95vw;
        width: 800px;
        margin: 3em auto 5em;
        
        input {
            width: 100%;
            font-size: 1.5rem;
            padding: .25em 0;
            text-indent: .25em;
            margin-bottom: .5em;
            
            
        }
        label {
            margin-bottom: 1em;
        }
        input::placeholder {
            color: var(--clr-grey-300);
        }
        input:focus {
            outline: none;
        }
        button {
            font-family: inherit;
            font-size: 1.5rem;
            padding: 0 .25em;
            width: 100%;
            cursor: pointer;
        }
    
    @media (min-width: 900px) {

        button {
            width: 120px;
            padding: 0px;
            font-size: 1em;
        }
        input{
            margin-bottom: 0px;
        }
        label {
            margin-bottom: 0;
        }
        form {
            height: auto;
            display: grid;
            grid-template-columns: 1fr .2fr;
            grid-gap: .5em;
            
        }
    }
`

export default EmailList