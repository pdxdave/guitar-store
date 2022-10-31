import styled from 'styled-components';
import { formatPrice } from '../utils/helper';
import Stars from './Stars'
import {Link} from 'react-router-dom'

// import { useProductsContext } from '../context/product_context';

const Product = ({name, url, price, stars, reviews, id}) => {

  // const {products_path} = useProductsContext()

  
  let monthly = price / 6;

  return (
    <Wrapper>
        <img src={url} alt={name} />
        <p className='name'>{name}</p>
        <p className='price'>{formatPrice(price)}</p>
            
        <div className='monthly_payment'>
           <p>Or <span className='monthly_price'>{formatPrice(monthly)}</span>/<span>month</span> for</p> 
           <p><span>6 mo.</span> with <span>Easy Pay</span></p>
        </div>
        
        <Stars stars={stars} reviews={reviews} />
        <Link to={`${id}`}>
          <button>More Info</button>

        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    width: 220px;
    max-width: 100%;

    box-shadow: 0px 0px 2px rgba(0,0,0,0.3);
    padding: .5em;

img{
    width: 100%;
    height: 300px;
    object-fit: fill;
    padding: 0px;
    margin: 0px;
  }
  .name {
    font-size: .875rem;
    text-align: center;
    margin-bottom: .25em;
  }
  button {
    width: 100%;
    font-family: inherit;
    font-size: 1rem;
    background: #449D67;
    border: none;
    color: #fff;
    padding: .25em 0;
    cursor: pointer;
    transition: background .3s ease-in;
  }
  button:hover {
    background: #8CCEA6;
  }
  .price {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: red;
    margin-bottom: .5em;
  }
  .monthly_payment {
    font-size: .75rem;
    text-align: center;
    p {
        margin-bottom: 0;
    }
    span {
        font-weight: 600;
    }
  }
  .monthly_price {
    color: red;
  }
  .reviews {
    text-align: center;
  }
`
export default Product