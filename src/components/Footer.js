import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <address>
          11 Music <br />
          7635 Sunset Blvd <br />
          Los Angeles, CA  90046
        </address>
        <div>
          "When 10 Isn't Enough"
        </div>
        <div>
          ph: 323-850-1055
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  margin-top: 2em;
  height: 10em;
  background-color: var(--clr-grey-600);
  display: flex;
  color: var(--clr-grey-200);

  .footer-container {
    max-width: 1400px;
    width: 95vw;
    margin: 0 auto;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
  }

address {
  text-align: left;
}


@media(max-width: 700px){
  .footer-container {
    flex-direction: column;
  }
  
}

`
export default Footer