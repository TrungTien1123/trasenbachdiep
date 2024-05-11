import actionTypes from '../constants/constants';
const initState = {
    items: [],
    totalQuantity:0,
    totalCost:0,
}

const cartReducer = (state = initState, action) => {
    switch(action.type){

        case actionTypes.ADD_TO_CART:
        return{
            ...state,
            cartIsOpen:true,
        }

        case actionTypes.ADD_MORE_CART:
        return{
            ...state,
        }

        case actionTypes.GET_CART_ITEMS_REQUEST:
        return {
            ...state,
        }
        case actionTypes.GET_CART_ITEMS_SUCCESS:
        return {
            ...state,
            items:action.payload
            }
        case actionTypes.GET_CART_ITEMS_FAIL:
        return {
        ...state,
        }

        default:
            return state;
    }
}
export default cartReducer