import styled from 'styled-components';
import { useFilterContext } from '../context/filter_guitar_context';
import Sort from './Sort'
import {formatPrice, getUniqueValues} from '../utils/helper'

const Filters = () => {
  const {
    filters: {
      min_price,
      max_price,
      price,
      brand,
    },
    updateFilters,
    clear_filters,
    all_products
  } = useFilterContext()

  const brands = getUniqueValues(all_products, 'brand')

  return (
    <Wrapper>
      <div className="desktop">
        <Sort />
        <div className="content">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* brands */}
              <div className="form-settings">
                <h5>Brands</h5>
                <div className='brands'>
                  {brands.map((br, index) => {
                    return <button
                        key={index}
                        onClick={updateFilters}
                        name="brand"
                        type="button"
                        className={`${brand === br.toLowerCase() ? 'active' : null}`}
                      >
                        {br}
                      </button>
                  })}
                 </div> 
              </div>
            {/* end brands */}
            </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .form-settings {
    margin-bottom: 1.3em;
  }

  .brands {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: .5em;
  }

  button {
    text-align: left;
    border: none;
    font-size: 1rem;
    color: var( --clr-grey-600);
    background: transparent;
    text-transform: capitalize;
    cursor: pointer;
    
  }
  .active {
    color: var( --clr-grey-900);
    text-decoration: underline;
  }
@media (min-width: 768px){
    .desktop{
      position: sticky;
      top: 10em;
  }
`
export default Filters