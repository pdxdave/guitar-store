import styled from 'styled-components'
import { GuitarList, Filters } from '../components'
import guitar_lrg from '../images/guitar_hero_banner.png'
import guitar_sm from '../images/guitar_hero_banner_sm.png'

const Guitars = () => {
  return (
    <main>
      
      <Wrapper className='page-setting'>
        <img className='guitar_lrg' src={guitar_lrg} alt="guitar ad" />
        <img className='guitar_sm' src={guitar_sm} alt="guitar ad mobile" />
        <div className="properties">
          <Filters />
            <div>
               <GuitarList />
            </div>
        </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`

  .properties {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .guitar_hero {
    text-align: center;
    width: 1440px;
    max-width: 100%; 
  }
  img {
    width: 100%;
    height: auto;
  }
  
  .guitar_lrg {
    display: none;
 }

  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }


@media (min-width: 900px){
    .guitar_sm {
        display: none;
    }
    .guitar_lrg {
        display: grid;
    }


`

export default Guitars