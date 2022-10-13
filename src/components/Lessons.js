import styled from 'styled-components';
// import lessons_lrg from '../images/lessons_lrg.png'
// import lessons_md from '../images/lessons_md.png'
import lessons_test from '../images/lessons_test.jpg'

const Lessons = () => {
  return (
    <Wrapper className='page-setting'>
        {/* <img className="lessons_lrg" src={lessons_lrg} alt="lessons" />
        <img className="lessons_md" src={lessons_md} alt="lessons" /> */}
        <img src={lessons_test} alt="" />
        <div>
          
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

padding-top: 0px;
    img {
        width: 100%;
        height: auto;
    }
    /* .lessons_lrg {
        display: none;
    } */

    /* @media (min-width: 901px){
        .lessons_lrg {
            display: grid;
        }
        .lessons_md {
            display: none;
        }
    } */

`
export default Lessons