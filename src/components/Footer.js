import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <h4>Footer</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  margin-top: 2em;
  height: 10em;
  width: 100%;
  background-color: var(--clr-grey-600);
  .footer-container {
    width: 95vw;
    margin: 0 auto;
    text-align: center;
  }

`
export default Footer