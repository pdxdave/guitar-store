import styled from "styled-components"
import scott from '../images/s_ion.svg'
import boss from '../images/boss.svg'
import setup from '../images/setup.svg'
import kemper from '../images/kemper_demo.svg'

const HomeFirstAd = () => {
  return (
    <Wrapper className="page-setting">

        <div className="ad-container">
            


            <div className="container">
                <div className="ad-one">
                    <img src={boss} alt="asdf" />
                </div>
                <div className="ad-two">
                    <img src={kemper} alt="asdf" />
                </div>
            </div>
          
          <div className="container">
                <div className="ad-three">
                    <img src={scott} alt="asdf" />
                </div>

                <div className="ad-four">
                    <img src={setup} alt="asdf" />
                </div>
            </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`

    img {
        width: 100%;
        height: auto;
    }
   .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: .5em;
   }
   
   @media (min-width: 900px){
        .ad-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: .5em;
        }
   }

`

export default HomeFirstAd