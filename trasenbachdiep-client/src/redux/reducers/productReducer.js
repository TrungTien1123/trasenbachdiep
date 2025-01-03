import actionTypes from '../constants/constants';
const initState = {
    isLoading: false,
    productInfo: {
        id: '',
        name: '',
        price: '',
        description:'',
        imageUrl: '',
        category:''
    },
    productList:[],
    productItemList:[],
    isDisplayCart:false,
    cart:[]
}

const productReducer = (state = initState, action) => {
 switch(action.type){
    //GET PRODUCT
    case actionTypes.GET_LIST_PRODUCTS_REQUEST:
    return {
        ...state,
        isLoading: true
      }
    case actionTypes.GET_LIST_PRODUCTS_SUCCESS:
    return {
        ...state,
        isLoading: true,
        productList:action.payload
        }
    case actionTypes.GET_LIST_PRODUCTS_FAIL:
    return {
    ...state,
    isLoading: true
    }
    //UPDATE
    case actionTypes.UPDATE_PRODUCT_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
    return {
      ...state,
      isLoading: false,
      productInfo: action.payload
    }
    case actionTypes.UPDATE_PRODUCT_FAIL:
    return {
      ...state,
      isLoading: false
    }
    //DELETE
    case actionTypes.DELETE_PRODUCT_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.DELETE_PRODUCT_SUCCESS:
    return {
      ...state,
      isLoading: false,
    }
    case actionTypes.DELETE_PRODUCT_FAIL:
    return {
      ...state,
      isLoading: false
    }
    //ADD
    case actionTypes.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
      case actionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
      case actionTypes.ADD_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false
      }


      
      //GET LIST PRODUCT ITEM
      case actionTypes.GET_LIST_PRODUCT_ITEMS_REQUEST:
        return {
            ...state,
            isLoading: true
          }
        case actionTypes.GET_LIST_PRODUCT_ITEMS_SUCCESS:
        return {
            ...state,
            isLoading: true,
            productItemList:action.payload
            }
        case actionTypes.GET_LIST_PRODUCT_ITEMS_FAIL:
        return {
        ...state,
        isLoading: true
        }
      //UPDATE
      case actionTypes.UPDATE_PRODUCT_ITEM_REQUEST:
    return {
      ...state,
      isLoading: true
    }
    case actionTypes.UPDATE_PRODUCT_ITEM_SUCCESS:
    return {
      ...state,
      isLoading: false,
      productItemInfo: action.payload
    }
    case actionTypes.UPDATE_PRODUCT_ITEM_FAIL:
    return {
      ...state,
      isLoading: false
    }
    default:
        return state;
 }

}

export default productReducer;