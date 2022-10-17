import styled from 'styled-components'
import { GuitarList, Filters } from '../components'

const Guitars = () => {
  return (
    <main>
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
  @media (min-width: 768px){
    .properties {
      grid-template-columns: 200px 1fr;
    }
  }


`

export default Guitars