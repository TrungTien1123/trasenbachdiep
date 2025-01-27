import {
    createBrowserRouter
} from "react-router-dom";
import App from "./App";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Products from "./pages/products/Products";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import ActiveAccount from "./pages/signup/active_account/ActiveAccount";
import HomePage from "./pages/home/HomePage";
import UserInfo from "./pages/home/userinfo/UserInfo";
import PasswordChanging from "./pages/home/password changing/PasswordChanging";
import ProductList from "./components/ProductManagement/ProductList"
import Cart from "./pages/cart/Cart";


const routers = createBrowserRouter([
    
    {
        path:"/signin",
        element: <Signin/>
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/active_account",
        element: <ActiveAccount/>
    },
    // /:productId
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/news",
                element:<News/>
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ]
    },
    {
        path:"/dashboard",
        element:<HomePage/>,
        children:[
            {
                path:"/dashboard/user-info",
                element:<UserInfo/>
            },
            {
                path:"/dashboard/list-products",
                element:<ProductList/>
            },
            {
                path:"/dashboard/password-changing",
                element:<PasswordChanging/>
            },
        ]
    }
    
]) 


export default routers;