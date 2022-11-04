
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
  const {isLoading, error} = useAuth0()

  if(isLoading){
    <Wrapper>
      <h3>Loading...</h3>
    </Wrapper>
  }
  if(error) {
    <Wrapper>
      <h3>Error...</h3>
    </Wrapper>
  }

  return (
      <>
        {children}
      </>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
`

export default AuthWrapper
/*
  This component wraps all the routes
*/