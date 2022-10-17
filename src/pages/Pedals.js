import styled from 'styled-components'
import { PedalList, Filters } from '../components'

const Pedals = () => {
  return (
    <main>
      <Wrapper className='page-setting'>
        <div className="properties">
          <Filters />
            <div>
               <PedalList />
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

export default Pedals