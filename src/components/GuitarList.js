import styled from 'styled-components'
import { useProductsContext } from "../context/product_context"
import Product from './Product'

const GuitarList = () => {
  const {guitar_products: guitars} = useProductsContext()

  return (
    <Wrapper>
      {guitars.map((guitar) => {
        return <Product key={guitar.id} {...guitar}/>
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

export default GuitarList