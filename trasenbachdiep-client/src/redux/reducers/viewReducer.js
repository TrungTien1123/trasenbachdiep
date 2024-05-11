import actionTypes from "../constants/constants";

const initState = {
    sidebarIsOpen: true,
    cartIsOpen: true,
}
const viewReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SIDEBAR:
            return{
                ...state,
                sidebarIsOpen: !state.sidebarIsOpen
            }
            case actionTypes.TOGGLE_CART:
                return{
                    ...state,
                    cartIsOpen: !state.cartIsOpen
                }
    
        default: 
            return state;
    }
}

export default viewReducer;