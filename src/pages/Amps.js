import styled from 'styled-components'
import { ProductList, Filters } from '../components'
import amp_banner_lrg from '../images/amp_banner_lrg.png'
import amp_banner_sm from '../images/amp_banner_sm.png'

const Amps = () => {
  return (
    <main>
      
      <Wrapper className='page-setting'>
        <img className='amp_banner_lrg' src={amp_banner_lrg} alt="amp banner ad" />
        <img className='amp_banner_sm' src={amp_banner_sm} alt="amp ad mobile" />
        <div className="properties">
          <Filters />
            <div>
               <ProductList />
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
  
  .amp_banner_lrg {
    display: none;
 }

  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }


@media (min-width: 900px){
    .amp_banner_sm {
        display: none;
    }
    .amp_banner_lrg {
        display: grid;
    }
  }

`

export default Amps