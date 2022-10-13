import styled from 'styled-components';

import lessons_test from '../images/lessons_test.jpg'

const Lessons = () => {
  return (
    <Wrapper className='page-setting'>
       
        <img src={lessons_test} alt="" />
        
    </Wrapper>
  )
}

const Wrapper = styled.section`

padding-top: 0px;
    img {
        width: 100%;
        height: auto;
    }

`
export default Lessons