import axios from "axios";
import actionTypes from "../constants/constants"; 


const signup = user => async dispatch => {
    
    dispatch({
        type: actionTypes.USER_SIGNUP_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('http://localhost:8888/api/auth/signup', {
            ...user
        })
        dispatch({
            type: actionTypes.USER_SIGNUP_SUCCESS,
            payload: response.data
        })
        //redirect to active account page
        window.location.replace('/active_account')
    } catch(error){
        console.log(error);
        console.log(error.response.data);
        dispatch({
            type: actionTypes.USER_SIGNUP_FAIL,
            payload: error.response
        })
    }
  
}

const signin = userSignin => async dispatch => {
    
    dispatch({
        type: actionTypes.USER_SIGNIN_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('http://localhost:8888/api/auth/signin', {
            username:userSignin.username,
            password:userSignin.password
        })
        dispatch({
            type: actionTypes.USER_SIGNIN_SUCCESS,
            payload: response.data
        })       
        localStorage.setItem('login', true)
        localStorage.setItem('username',response.data.username)
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('role',response.data.role)  
        window.location.replace('/dashboard')     
    } catch(error){
        console.log(error);
        console.log(error.response);
        dispatch({
            type: actionTypes.USER_SIGNIN_FAIL,
            payload: error.response
        })
    }
  
}

const getUserInfo = username => async dispatch => {
    dispatch({
        type:actionTypes.GET_USER_INFO_REQUEST,
        payload: null
    })

    try{
        const response = await axios.get('http://localhost:8888/api/accounts/'+ username,{
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        dispatch({
            type: actionTypes.GET_USER_INFO_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.GET_USER_INFO_FAIL,
            payload: error.response
        })
    }
}


const updateUserInfo = (user,file)  => async dispatch => {
    dispatch({
        type:actionTypes.UPDATE_USER_INFO_REQUEST,
        payload: null
    })

    try{
        if (file){
            var formData = new FormData();
            formData.append('image',file,file.name)

        const responseUpload = await axios({
            method: 'POST',
            url: 'http://localhost:8888/api/files/image',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: formData
        });

        console.log(responseUpload);
        const response = await axios({
            method: 'PUT',
            url: 'http://localhost:8888/api/accounts/' + user.id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: user.password,
                role: localStorage.getItem('role').replace('[','').replace(']',''),
                status: 'ACTIVE',
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })
        localStorage.setItem('avartarUrl', responseUpload.data)

        dispatch({
            type: actionTypes.UPDATE_USER_INFO_SUCCESS,
            payload: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: user.password,
                role: localStorage.getItem('role').replace('[','').replace(']',''),
                status: 'ACTIVE',
                avatarUrl: responseUpload.data ? responseUpload.data : ''
            }
        })
    } else{
        const response = await axios({
            method: 'PUT',
            url: 'http://localhost:8888/api/accounts/' + user.id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                password: user.password,
                role: localStorage.getItem('role').replace('[','').replace(']',''),
                status: 'ACTIVE',
                avatarUrl: localStorage.getItem('avartarUrl') ? localStorage.getItem('avartarUrl') : ''
            }
        })

        dispatch({
            type: actionTypes.UPDATE_USER_INFO_SUCCESS,
            payload: response.data
        })
    }
        
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.UPDATE_USER_INFO_FAIL,
            payload: error.response
        })
    }
}

const sendContact = (contact) => async dispatch => {
    dispatch({
        type: actionTypes.SENND_CONTACT_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('http://localhost:8888/api/contact', {
            ...contact
        })
        dispatch({
            type: actionTypes.SEND_CONTACT_SUCCESS,
            payload: response.data // 'đã gửi thành công
        })
    } catch(error){
        console.log(error);
        console.log(error.response);
        dispatch({
            type: actionTypes.SENND_CONTACT_FAIL,
            payload: error.response
        })
    }
  
}

const userActions = {
    signup,
    signin,
    getUserInfo,
    updateUserInfo,
    sendContact
    
}


export default userActions;