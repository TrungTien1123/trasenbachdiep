import actionTypes from "../constants/constants"

const toggleSidebar= () => dispatch => {
    dispatch({
        type: actionTypes.TOGGLE_SIDEBAR,
        payload: null
    })
}

const toggleCart= () => dispatch => {
    dispatch({
        type: actionTypes.TOGGLE_CART,
        payload: null
    })
}
const viewActions = {
    toggleSidebar,
    toggleCart
}

export default viewActions;