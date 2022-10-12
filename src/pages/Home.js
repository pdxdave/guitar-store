import {Hero} from '../components';
import styled from 'styled-components';
import {HomeFirstAd, MarshallSlider} from '../components';



const Home = () => {
    return (
      <Wrapper >
        <Hero hero="homeHero">
          <div  className='banner' >
            <div></div>
            <div className='banner-content'>
               <h1>Ibanez Guitars</h1>
               <h2>Fall Sale Event</h2>
               <h4>Thru Dec. 21</h4>
            </div>
          </div>
        </Hero>
        <HomeFirstAd />
        <MarshallSlider />
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