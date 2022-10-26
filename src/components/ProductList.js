import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import Product from './Product'
import {useProductsContext} from '../context/product_context'

const List = () => {
  const {filtered_products: skimpy} = useFilterContext()
  const {products_loading: loading, products_error: error} = useProductsContext()
    
  if(loading){
    return <p>Product is loading</p>
  }
  if(error){
    return <p>There was an error</p>
  }


  return (
    <Wrapper>
      {skimpy.map((skimp) => {
        return <Product key={skimp.id} {...skimp}/>
      })}
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    row-gap: 10px;
    column-gap: 10px;
    justify-items: center; 
`

export default List