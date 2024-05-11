


const initial={
    products:[
        {   
            id:1,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà sen",
            price:50000
        },
        {
            id:2,
            rating:"",
            image:"https://phuclong.com.vn/uploads/large/page/be556e176329ff-tralaituilocphuclong.jpg",
            name: "Trà nhài",
            price:100000
        },
        {   
            id:3,
            rating:"",
            image:"https://phuclong.com.vn/uploads/large/page/5bc9e90c149e4a-trasentuilocphuclong.jpg",
            name: "Trà Phúc Long",
            price:150000
        },
        {   
            id:4,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:5,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:6,
            rating:"",
            image:"https://phuclong.com.vn/uploads/large/page/5bc9e90c149e4a-trasentuilocphuclong.jpg",
            name: "Trà búp",
            price:70000
        },
        {   
            id:7,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:8,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:9,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:10,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:11,
            rating:"",
            image:"https://csfood.vn/wp-content/uploads/2020/11/Tr%C3%A0-Sen-T%C3%BAi-L%E1%BB%8Dc-Th%C3%A1p-M%C6%B0%E1%BB%9Di-H%E1%BB%99p-50g.png",
            name: "Trà búp",
            price:70000
        },
        {   
            id:12,
            rating:"",
            image:"https://phuclong.com.vn/uploads/large/page/5bc9e90c149e4a-trasentuilocphuclong.jpg",
            name: "Trà búp",
            price:70000
        }
    ],
    isDisplayCart:false,
    cart:[
    
    ]
}

export const reducer = (state = initial,action) =>{
    switch(action.type){
        case "togglecart":
            return{
                ...state,
                isDisplayCart:action.status
            }
        case "addtocart":
                let {cart} = state;
                let newProduct = action.product
                let checkProduct = cart.find(x => x.id ===newProduct.id)
                if (checkProduct){
                    checkProduct.quantity++;
                }else{
                    newProduct.quantity=1;
                    cart.push(newProduct);
                } 

                return{
                ...state,
                isDisplayCart:true,
                cart: [...cart]
            }
        case "addmore":
            // let {cart} = state;
            let addedProduct = action.product
            let targetProduct = cart.find(x => x.id ===addedProduct.id)
            targetProduct.quantity++;
            return{
                ...state,
                cart: [...cart]
            }
        default:
            return state;
    }
}

export const toggleCart =(status) =>{
    return{
        type: "togglecart",
        status: status
    }
}

export const addToCart = (product) =>{
    return{
        type:"addtocart",
        product:product
    }
}

export const addMore = (product) =>{
    return{
        type:"addmore",
        product:product
    }
}