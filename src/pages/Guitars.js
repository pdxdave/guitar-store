import styled from 'styled-components'
import { GuitarList, Filters } from '../components'
// import logo from '../images/tfg.png'

const Guitars = () => {
  return (
    <main>
      <div className="guitar_hero">
        <p>asdfasdfasdf</p>
      </div>
      
      <Wrapper className='page-setting'>
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
  
  }
  


  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }


`

export default Guitars