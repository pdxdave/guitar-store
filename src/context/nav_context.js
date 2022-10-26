import React, {useReducer, useContext} from 'react';
import reducer from '../reducers/nav_reducer'
import {
    MOBILE_OPEN,
    MOBILE_CLOSE,
    PATH_TEST
} from '../actions'

const initialState = {
    isMobileOpen: false,
    pathTest: '',
}

const MobileContext = React.createContext()

export const MobileProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const openMobile = () => {
        dispatch({ type: MOBILE_OPEN})
    }
    const closeMobile = () => {
        dispatch({ type: MOBILE_CLOSE})
    }

    const pathTest = (e) => {
        let name = e.target.name
        name = name.slice(0,-1)
        console.log(name)
        dispatch({ type: PATH_TEST, payload: name})
    }

    return (
        <MobileContext.Provider value={{
            ...state,
            openMobile,
            closeMobile,
            pathTest
        }}>
            {children}
        </MobileContext.Provider>
    )
}

export const useMobileContext = () => {
    return useContext(MobileContext)
}