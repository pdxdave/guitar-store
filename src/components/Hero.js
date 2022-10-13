import styled from 'styled-components'
import collen3 from '../images/collen3.jpg'

const Hero = () => {
  return (
    <Wrapper >
     <img src={collen3} alt="" />
     <div className='hero-content'>
    
     </div>
    </Wrapper>
  ) 
}

const Wrapper = styled.section`
position: relative;
    width: 95vw;
    max-width: 1400px;
    margin: 0 auto;
    /* padding: 2rem 0; */

   img {
        width: 100%;
        height: auto;
   }

   h1 {
    color: white;
   }


@media (max-width: 900px){
    width: 100%;
}
`

export default Hero