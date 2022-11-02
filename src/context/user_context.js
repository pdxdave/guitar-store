import React, {useContext, useEffect, useState} from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({children}) => {

    const {
        isAuthenticated, 
        loginWithRedirect, 
        logout, 
        user,
        isLoading
    } = useAuth0()


    const [productUser, setProductUser] = useState(null)

    useEffect(() => {
        if(isAuthenticated){
            setProductUser(user)
        } else {
            setProductUser(false)
        }
    }, [isAuthenticated])


    return (
        <UserContext.Provider value={{
            loginWithRedirect,
            logout,
            productUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}