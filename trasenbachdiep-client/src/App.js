import './App.css';

import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';

import WithLoading from './components/HOC/withLoading/WithLoading';
import HomePage from './pages/home/HomePage';

import ListGroups from './pages/home/listgroups/ListGroups';
import PasswordChanging from './pages/home/password changing/PasswordChanging';
import Settings from './pages/home/settings/Settings';
import UserInfo from './pages/home/userinfo/UserInfo';
import Header from './pages/home/header/Header';
import Footer from './pages/home/footer/Footer';
import Cart from './pages/cart/Cart';

const SignupWithLoading = WithLoading(Signup);
const SigninWithLoading = WithLoading(Signin);

const UserWithLoading = WithLoading(UserInfo)
const ListGroupsWithLoading = WithLoading(ListGroups)
const SettingsWithLoading = WithLoading(Settings)
const PasswordChangingWithLoading = WithLoading(PasswordChanging)

const App = () => {

    const isLoggedIn = localStorage.getItem('login')

    // if (isLoggedIn === 'true') {
    //     // return (
    //     // <Routes>
    //     //     <Route path="/" element={ <App/> }/>
    //     //     <Route path="/signin" element={ <SigninWithLoading /> }/>
    //     //     <Route path="/signup" element={ <SignupWithLoading /> } />
    //     //     <Route path="/forgot-password" element={ <ForgotPassword /> } />

    //     //     <Route path="/dashboard" element={ <HomePage /> }>
    //     //             <Route path="/user-info" element={<UserWithLoading />} />
    //     //             <Route path="/list-groups" element={<ListGroupsWithLoading />} />
    //     //             <Route path="/password-changing" element={<PasswordChangingWithLoading />} />
    //     //             <Route path="/settings" element={<SettingsWithLoading />} />
    //     //     </Route>

    //     // </Routes>
          
    //     //     // <div>
    //     //     //     <Routes>
    //     //     //         <Route path="/signin" element={<SigninWithLoading />}/>
    //     //     //         <Route path="/signup" element={<SignupWithLoading />} />
    //     //     //         <Route path="/forgot-password" element={<ForgotPassword />} />
    //     //     //         <Route path="/" element={<Navigate to="/signin"/>} />
    //     //     //     </Routes>
    //     //     // </div>
    //     // )
    // }

    return (
        <div className='App'>
            <Cart/>
        <Header nav={true} />
    <div className="body">
        <Outlet/>
    </div>
        <Footer/>
    </div>
    );

    
}


export default App;