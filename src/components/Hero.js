import styled from 'styled-components'
import collen_hero_lrg from '../images/collen_hero_lrg.jpg'
import collen_hero_sm from '../images/collen_hero_sm.jpg'

const Hero = () => {
  return (
    <Wrapper >
     <img className='hero_lrg' src={collen_hero_lrg} alt="phil collen" />
     <img className='hero_sm' src={collen_hero_sm} alt="phil collen mobile" />
    </Wrapper>
  ) 
}

const Wrapper = styled.section`
    /* position: relative; */
    width: 95vw;
    max-width: 1400px;
    margin: 0 auto;

   img {
        width: 100%;
        height: auto;
   }

   h1 {
    color: white;
   }
 .hero_lrg {
    display: none;
 }

@media (max-width: 900px){
    width: 100%;
    
}
@media (min-width: 900px){
    .hero_sm {
        display: none;
    }
    .hero_lrg {
        display: grid;
    }
}
`

export default Hero