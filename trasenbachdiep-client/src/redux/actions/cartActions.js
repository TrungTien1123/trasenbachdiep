import axios from "axios";
import actionTypes from "../constants/constants"; 

// const addMore = addedProduct => dispatch => {
//     let targetProduct = items.find(x => x.id ===addedProduct.id)
//             targetProduct.qty++;
// }

// const addToCart = product => dispatch => {
//     let newProduct = product
//     let checkProduct = items.find(x => x.id === newProduct.id)
//     if (checkProduct){
//         checkProduct.qty++;
//     }else{
//         newProduct.qty=1;
//         items.push(newProduct);
//     } 
// }

const getCartItems = username => async dispatch => {
    dispatch({
        type:actionTypes.GET_CART_ITEMS_REQUEST,
        payload: null
    })

    try{
        const response = await axios.get('http://localhost:8888/api/cart/' + username,{
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        dispatch({
            type: actionTypes.GET_CART_ITEMS_SUCCESS,
            payload: response.data
        })
        console.log(response.data);
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.GET_CART_ITEMS_FAIL,
            payload: error.response
        })
    }
}


const cartActions = {
    getCartItems,
    // addMore,
}


export default cartActions;