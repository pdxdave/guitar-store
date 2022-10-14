import styled from 'styled-components';
import lessons1_lrg from '../images/lessons1_lrg.jpg';
import lessons1_sm from '../images/lessons1_sm.jpg';

const Lessons = () => {
  return (
    <Wrapper className='page-setting'>
       
        <img className='lessons_lrg' src={lessons1_lrg} alt="woman taking guitar lesson" />
        <img className='lessons_sm' src={lessons1_sm} alt="woman taking guitar lesson" />
        
    </Wrapper>
  )
}

const Wrapper = styled.section`

    padding-top: 0px;
    width: 95vw;
    max-width: 1400px;
    margin: 0 auto;

    img {
        width: 100%;
        height: auto;
    }

    .lessons_lrg {
        display: none;
    }
    @media (max-width: 900px){
    width: 100%;
    
}
@media (min-width: 900px){
    .lessons_sm {
        display: none;
    }
    .lessons_lrg {
        display: grid;
    }
}
   
`
export default Lessons