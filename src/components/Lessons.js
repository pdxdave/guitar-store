import styled from 'styled-components';
import lessons_lrg from '../images/lessons_lrg.png'
import lessons_md from '../images/lessons_md.png'

const Lessons = () => {
  return (
    <Wrapper className='page-setting'>
        <img className="lessons_lrg" src={lessons_lrg} alt="lessons" />
        <img className="lessons_md" src={lessons_md} alt="lessons" />
    </Wrapper>
  )
}

const Wrapper = styled.section`

padding-top: 0px;
    img {
        width: 100%;
        height: auto;
    }
    .lessons_lrg {
        display: none;
    }

    @media (min-width: 901px){
        .lessons_lrg {
            display: grid;
        }
        .lessons_md {
            display: none;
        }
    }

`
export default Lessons