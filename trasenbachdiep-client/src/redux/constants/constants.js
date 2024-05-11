const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
const TOGGLE_CART = 'TOGGLE_CART'

const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST'
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'

const USER_SIGNIN_REQUEST = 'USER_SIGNIN_REQUEST'
const USER_SIGNIN_SUCCESS = 'USER_SIGNIN_SUCCESS'
const USER_SIGNIN_FAIL = 'USER_SIGNIN_FAIL'

const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST'
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS'
const GET_USER_INFO_FAIL = 'GET_USER_INFO_FAIL'


const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST'
const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS'
const UPDATE_USER_INFO_FAIL = 'UPDATE_USER_INFO_FAIL'

const SEND_CONTACT_REQUEST = 'SEND_CONTACT_REQUEST'
const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS'
const SEND_CONTACT_FAIL = 'SEND_CONTACT_FAIL'

const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST'
const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL'

const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST'
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL'

const GET_LIST_PRODUCTS_REQUEST = 'GET_LIST_PRODUCTS_REQUEST'
const GET_LIST_PRODUCTS_SUCCESS = 'GET_LIST_PRODUCTS_SUCCESS'
const GET_LIST_PRODUCTS_FAIL = 'GET_LIST_PRODUCTS_FAIL'

const GET_LIST_PRODUCT_ITEMS_REQUEST = 'GET_LIST_PRODUCT_ITEMS_REQUEST'
const GET_LIST_PRODUCT_ITEMS_SUCCESS = 'GET_LIST_PRODUCT_ITEMS_SUCCESS'
const GET_LIST_PRODUCT_ITEMS_FAIL = 'GET_LIST_PRODUCT_ITEMS_FAIL'

const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST'
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS'
const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL'

const UPDATE_PRODUCT_ITEM_REQUEST = 'UPDATE_PRODUCT_ITEM_REQUEST'
const UPDATE_PRODUCT_ITEM_SUCCESS = 'UPDATE_PRODUCT_ITEM_SUCCESS'
const UPDATE_PRODUCT_ITEM_FAIL = 'UPDATE_PRODUCT_ITEM_FAIL'


const ADD_TO_CART = 'ADD_TO_CART'
const ADD_MORE_CART = ' ADD_MORE_CART '


const GET_CART_ITEMS_REQUEST = 'GET_CART_ITEMS_REQUEST'
const GET_CART_ITEMS_SUCCESS = 'GET_CART_ITEMS_SUCCESS'
const GET_CART_ITEMS_FAIL = 'GET_CART_ITEMS_FAIL'

 const actionTypes ={
    TOGGLE_SIDEBAR,
    TOGGLE_CART,
    
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,

    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,

    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAIL,

    SEND_CONTACT_REQUEST,
    SEND_CONTACT_SUCCESS,
    SEND_CONTACT_FAIL,

    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,

    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,

    GET_LIST_PRODUCTS_REQUEST,
    GET_LIST_PRODUCTS_SUCCESS,
    GET_LIST_PRODUCTS_FAIL,

    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,

    GET_LIST_PRODUCT_ITEMS_REQUEST,
    GET_LIST_PRODUCT_ITEMS_SUCCESS,
    GET_LIST_PRODUCT_ITEMS_FAIL,

    UPDATE_PRODUCT_ITEM_REQUEST,
    UPDATE_PRODUCT_ITEM_SUCCESS,
    UPDATE_PRODUCT_ITEM_FAIL,
    
    ADD_TO_CART,
    ADD_MORE_CART,

    GET_CART_ITEMS_REQUEST,
    GET_CART_ITEMS_SUCCESS,
    GET_CART_ITEMS_FAIL,

    
}

export default actionTypes; 