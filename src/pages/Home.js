
import styled from 'styled-components';
import {HomeFirstAd, MarshallSlider, Lessons, Hero} from '../components';



const Home = () => {
    return (
      <Wrapper >
        <Hero />
        <HomeFirstAd />
        <MarshallSlider />
        <Lessons />
      </Wrapper>
    )
  }

  const Wrapper = styled.main`
    .banner {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }
    .banner-content {
      padding-top: 5em;
    }
    .banner-content h1 {
      color: red;
      padding-bottom: 1em;
    }
    .banner-content h2, h4 {
      color: var(--clr-grey-200);
    }

    @media (max-width: 960px){
      .banner-content {
        padding-top: 3em;
      }
      .banner-content h1 {
        padding-bottom: 0;
        margin: 0;
      }
      .banner-content h2 {
        font-size: 1.2rem;
      }
      .banner-content h4 {
        font-size: 1.2rem;
      }
    }
    
  `
  
  export default Home