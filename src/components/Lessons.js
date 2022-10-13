import styled from 'styled-components';
import lessons from '../images/lessons.png'

const Lessons = () => {
  return (
    <Wrapper className='page-setting'>
        <img src={lessons} alt="lessons" />
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