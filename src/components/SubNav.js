import styled from "styled-components"


const SubNav = () => {
  return (
    <Wrapper>
        <div className="store-location">
           <p>my store <span className="city">Portland, OR</span> Delivery <span>United States</span></p> 
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    position: sticky;
    top: 7em;
    background-color: var(--clr-grey-200) ;
    width: 100%;
    height: 2.5em;
    display: grid;
    z-index: 999;

    .store-location {
        width: 90vw;
        max-width: 1400px;
        margin: 0 auto;

        display: grid;
        align-items: center;
    }
    p {
        margin-bottom: 0px;
        display: inline-block;
    }
    p span {
        text-decoration: underline;
        font-weight: 500;
    }
    .city {
        padding-right: 10px;
    }
`

export default SubNav