import axios from "axios";
import actionTypes from "../constants/constants"; 


const addProduct = product => async dispatch => {
    
    dispatch({
        type: actionTypes.ADD_PRODUCT_REQUEST,
        payload: null
    })

    try{
        const response = await axios.post('http://localhost:8888/api/product', {
            ...product
        })
        dispatch({
            type: actionTypes.ADD_PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error);
        console.log(error.response.data);
        dispatch({
            type: actionTypes.ADD_PRODUCT_FAIL,
            payload: error.response
        })
    }
  
}

const getListProducts = () => async dispatch => {
    dispatch({
        type:actionTypes.GET_LIST_PRODUCTS_REQUEST,
        payload: null
    })

    try{
        const response = await axios.get('http://localhost:8888/api/product',{
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        dispatch({
            type: actionTypes.GET_LIST_PRODUCTS_SUCCESS,
            payload: response.data
        })
        console.log(response.data.content);
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.GET_LIST_PRODUCTS_FAIL,
            payload: error.response
        })
    }
}

const updateProductInfo = (product,file)  => async dispatch => {
    dispatch({
        type:actionTypes.UPDATE_PRODUCT_REQUEST,
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
            url: 'http://localhost:8888/api/product/' + product.id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })
        localStorage.setItem('avartarUrl', responseUpload.data)

        dispatch({
            type: actionTypes.UPDATE_PRODUCT_SUCCESS,
            payload: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })
    } else{
        const response = await axios({
            method: 'PUT',
            url: 'http://localhost:8888/api/product/' ,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: localStorage.getItem('avartarUrl') ? localStorage.getItem('avartarUrl') : ''
            }
        })

        dispatch({
            type: actionTypes.UPDATE_PRODUCT_SUCCESS,
            payload: response.data
        })
    }
        
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.UPDATE_PRODUCT_FAIL,
            payload: error.response
        })
    }
}


const deleteProduct = product => async dispatch => {
    
    dispatch({
        type: actionTypes.DELETE_PRODUCT_REQUEST,
        payload: null
    })

    try{
        const response = await axios({
            method: 'DELETE',
            url: 'http://localhost:8888/api/product/' + product.id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
        })

        dispatch({
            type: actionTypes.DELETE_PRODUCT_SUCCESS,
            payload: response.data
        })
    } catch(error){
        console.log(error);
        console.log(error.response.data);
        dispatch({
            type: actionTypes.DELETE_PRODUCT_FAIL,
            payload: error.response
        })
    }
  
}

const getListProductItems = () => async dispatch => {
    dispatch({
        type:actionTypes.GET_LIST_PRODUCT_ITEMS_REQUEST,
        payload: null
    })

    try{
        const response = await axios.get('http://localhost:8888/api/product-item',{
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem('token')
            }
        })

        dispatch({
            type: actionTypes.GET_LIST_PRODUCT_ITEMS_SUCCESS,
            payload: response.data
        })
        console.log(response.data.content);
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.GET_LIST_PRODUCT_ITEMS_FAIL,
            payload: error.response
        })
    }
}

const updateProductItemInfo = (product,file)  => async dispatch => {
    dispatch({
        type:actionTypes.UPDATE_PRODUCT_ITEM_REQUEST,
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
            url: 'http://localhost:8888/api/product-item/' + product.id,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })
        localStorage.setItem('avartarUrl', responseUpload.data)

        dispatch({
            type: actionTypes.UPDATE_PRODUCT_ITEM_SUCCESS,
            payload: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: responseUpload ? responseUpload.data : ''
            }
        })
    } else{
        const response = await axios({
            method: 'PUT',
            url: 'http://localhost:8888/api/product-item/' ,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                imageUrl: product.imageUrl,
                categoryId:product.categoryId,
                avatarUrl: localStorage.getItem('avartarUrl') ? localStorage.getItem('avartarUrl') : ''
            }
        })

        dispatch({
            type: actionTypes.UPDATE_PRODUCT__ITEM_SUCCESS,
            payload: response.data
        })
    }
        
    } catch(error){
        console.log(error.response);
        dispatch({
            type: actionTypes.UPDATE_PRODUCT_ITEM_FAIL,
            payload: error.response
        })
    }
}

const productActions ={
    getListProducts,
    addProduct,
    updateProductInfo,
    deleteProduct,
    getListProductItems,
    updateProductItemInfo,

}
export default productActions;