import actionTypes from "../constants/constants";
const initState = {
    isLoading: false,
    userInfo: {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phoneNumber:'',
        password: '',
        role: '', 
        avatarUrl: ''
    },
}

const userReducer = (state = initState, action) => {
  switch(action.type){
    case actionTypes.USER_SIGNUP_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.USER_SIGNUP_SUCCESS:
    return {
      ...state,
      isLoading: false
    }
    case actionTypes.USER_SIGNUP_FAIL:
    return {
      ...state,
      isLoading: false
    }
    //sign -in
    case actionTypes.USER_SIGNIN_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.USER_SIGNIN_SUCCESS:
    return {
      ...state,
      isLoading: false
    }
    case actionTypes.USER_SIGNIN_FAIL:
    return {
      ...state,
      isLoading: false
    }
    // User-info
    case actionTypes.GET_USER_INFO_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.GET_USER_INFO_SUCCESS:
    return {
      ...state,
      isLoading: false,
      userInfo: action.payload
    }
    case actionTypes.GET_USER_INFO_FAIL:
    return {
      ...state,
      isLoading: false
    }
    //update user info
    case actionTypes.UPDATE_USER_INFO_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.UPDATE_USER_INFO_SUCCESS:
    return {
      ...state,
      isLoading: false,
      userInfo: action.payload
    }
    case actionTypes.UPDATE_USER_INFO_FAIL:
    return {
      ...state,
      isLoading: false
    }
    default:
        return state
  }
}

export default userReducer;