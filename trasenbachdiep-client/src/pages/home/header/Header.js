import { useEffect, useState } from 'react';
import { MdMenu, MdShoppingCart } from 'react-icons/md';
import logo from '../../../images/Layout/Logo.png';

import { Link } from 'react-router-dom';

import Dropdown from '../dropdown/Dropdown';

import './Header.css';

import { connect } from 'react-redux';
import viewActions from '../../../redux/actions/viewActions';

const Header = (props) => {
    var isLoggedIn = localStorage.getItem('login')


    const _clickCartIcon = () => {
        props.toggleCart();
    }
     const _clickMenuIcon = () => {
        props.toggleSidebar()
    }

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    console.log();
    const _onClickAvatar = () => {
         if ( isLoggedIn == 'true' && window.location.pathname.includes('/dashboard') ) {
            setDropdownIsOpen(!dropdownIsOpen)
         }else if (isLoggedIn == 'true'){
            window.location.replace('/dashboard')
        }else{
            window.location.replace('/signin');
        }
    }

    const handleClickOutSideDropdown = () => {
        setDropdownIsOpen(false)
    }


    useEffect(()=>{
        isLoggedIn = localStorage.getItem('login');
        console.log(isLoggedIn);
        console.log(props.cartIsOpen);
    },[isLoggedIn])


    return (      
        <header className="d-flex justify-content-between container  pt-3">

            <div className="col-3 nav-left">
                { props.displayMenuIcon && <MdMenu onClick={_clickMenuIcon}></MdMenu>}
                <img src={logo} alt="logo"/> 
            </div>
            <div className="nav-middle">
                {
                        props.nav &&     
                         <ul className=" d-flex justify-content-between align-items-center ">
                         <li className="item">
                             <Link to={'/'}>TRANG CHỦ</Link>
                         </li>
                         <li className="item">
                             <Link to={'/about'}>GIỚI THIỆU</Link>
                         </li>
                         <li className="item">
                             <Link to={'/products'}>SẢN PHẨM</Link>
                         </li>
                         <li className="item">
                             <Link to={'/news'}>TIN TỨC</Link>
                         </li>
                         <li className="item">
                             <Link to={'/contact'}>LIÊN HỆ</Link>
                         </li>
                     </ul>
                }
               
            </div>
            <div className='nav-right'>
                {
                   isLoggedIn && <MdShoppingCart className='header-cart' style={{fontSize: '30px' }} onClick={_clickCartIcon}/> 
                }
                        
                        <div className='header-avatar' onClick={_onClickAvatar}>
                            <img src="../../images/avatar.png"/>
                        </div>
                        {   
                            dropdownIsOpen && <Dropdown setDropdownClose={handleClickOutSideDropdown}/>
                        }
            </div>
        </header> 
    )
}

const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen,
        cartIsOpen:state.view.cartIsOpen
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        toggleSidebar: header => {
            dispatch(viewActions.toggleSidebar(header));
        },
        toggleCart: header => {
            dispatch(viewActions.toggleCart(header));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)  (Header);