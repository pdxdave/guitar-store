import styled from "styled-components"

const Hero = ({children, hero}) => {
  return (
    <Wrapper className={hero}>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 95vw;
  max-width: 1400px;  
  margin: 0 auto;

  @media (max-width: 960px){
    width: 100%;
  }
`
export default Hero