import { useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { single_product_url as url} from '../utils/misc';
import { useProductsContext } from '../context/product_context';
import { ProcessImages } from '../components';
import { formatPrice } from '../utils/helper';
import {Stars} from '../components'
import { v4 as uuidv4 } from 'uuid'

const SingleProductPage = () => {
    const {id} = useParams()
    const {
      single_product_loading: loading,
      single_product_error: error,
      single_product: product,
      fetchSingleProduct
    } = useProductsContext()


    useEffect(() => {
      fetchSingleProduct(`${url}${id}`)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if(loading){
      return <p>Loading your product...</p>
    }
    if(error){
      return <p>Error...</p>
    }


    const {
      name,
      features,
      price,
      stars,
      reviews,
      description,
      stock,
      images
    } = product

  return (
    <Wrapper className="page-setting">
      <div className="product-divider">
          <ProcessImages images={images} />
          <div className="product-specs">
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Price: {formatPrice(price)}</p>
              <p>Availability: {stock > 0 ? 'In stock' : 'out of stock'} </p>
              <Stars stars={stars} reviews={reviews}/>

              {features && features.split(',').map((item, index) => {
                return (
                  <ul>
                    <li key={uuidv4()}>{item}</li>
                  </ul>
                )
              })}
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
.product-divider {
  display: grid;
  gap: 4rem;
  margin-top: 1em;
}

ul {
  padding: .25em .5em;
}
li {
  list-style-type: circle;
}


.starsContainer {
  display: flex;
  align-items: left;
  justify-content: left;
}

@media (min-width: 900px){
  .product-divider {
    grid-template-columns: 1fr 1fr;
    /* border: 1px solid red; */
    
  }
`

export default SingleProductPage