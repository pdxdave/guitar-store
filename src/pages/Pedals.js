import styled from 'styled-components'
import { ProductList, Filters } from '../components'
import pedal_lrg from '../images/foot_pedal_lrg.jpg'
import pedal_banner_sm from '../images/pedal_banner_sm.png'

const Pedals = () => {
  return (
    <main>
      
      <Wrapper className='page-setting'>
        <img className='pedal_lrg' src={pedal_lrg} alt="pedal ad" />
        <img className='pedal_banner_sm' src={pedal_banner_sm} alt="peda ad mobile" />
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
  
  .pedal_lrg {
    display: none;
 }

  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }


@media (min-width: 900px){
    .pedal_banner_sm {
        display: none;
    }
    .pedal_lrg {
        display: grid;
    }
  }

`

export default Pedals