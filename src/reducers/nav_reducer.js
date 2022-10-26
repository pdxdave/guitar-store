import {MOBILE_OPEN, MOBILE_CLOSE, PATH_TEST} from '../actions'


const mobile_reducer = (state, action) => {

    if(action.type === MOBILE_OPEN){
        return {
            ...state,
            isMobileOpen: true
        }
    }
    if(action.type === MOBILE_CLOSE){
        return {
            ...state,
            isMobileOpen: false
        }
    }

    if(action.type === PATH_TEST){
        return {
            ...state, 
            pathTest: action.payload
        }
    }

    throw new Error(`No Matching "${action.type} - action type`)
}

export default mobile_reducer