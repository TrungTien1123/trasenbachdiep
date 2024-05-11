import { MdControlCamera,MdMenu  } from 'react-icons/md';

import { menuLinks } from '../../../data/data';
import logoSideBar from '../../../images/Layout/Logo_no_brand.png'

import './Sidebar.css';
import {connect} from 'react-redux'

import CustomLinks2 from '../../../components/customlinks/CustomLinks2';
import { NavLink } from 'react-router-dom';
import viewActions from '../../../redux/actions/viewActions';

const Sidebar = (props)=> {
    const role = localStorage.getItem('role').replace('[','').replace(']','')
    const _logout = () =>{
        window.location.replace('/signin')
        localStorage.clear();
    }
    const _returnHome = () =>{
        window.location.replace('/')
    }
    const _closeSidebar =  (props) => {
        props.sidebarIsOpen = !props.sidebarIsOpen
    }
    
    if(role === 'ADMIN') {
        return(
            <div 
                className={
                    props.sidebarIsOpen ? 
                    'sidebar' : 'sidebar close'
                }
            >  
                
                <div className='sidebar-header'>            
                    <img src={logoSideBar} />
                    <h3>Trà sen <br/> Bách Diệp</h3>
                </div>
                <div className='sidebar-menu'>
                    <div className='dashboard'>
                        <MdControlCamera onClick={_closeSidebar} size='1.5rem'/>
                        <span>Dashboard</span>
                        <span>new</span>
                    </div>
    {/*                
                    <CustomLinks2 menuLinks={menuLinks} /> */}
                    <NavLink to={''} onClick={_returnHome} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-home'></i>
                            <span>Trang chủ</span>
                    </NavLink>
                    <NavLink to={'user-info'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-id-card'></i>
                            <span>User Info</span>
                    </NavLink>
                    <NavLink to={'list-products'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-layer-group'></i>
                            <span>List Products</span>
                    </NavLink>
                    <NavLink to={'list-products'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-layer-group'></i>
                            <span>List Posts</span>
                    </NavLink>
                    <NavLink to={'list-products'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-layer-group'></i>
                            <span>List Contacts</span>
                    </NavLink>
                    <NavLink to={'password-changing'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa fa-key'></i>
                            <span>Change Password</span>
                    </NavLink>
                    <NavLink onClick={_logout} to={''} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                            <i className='fa-solid fa-sign-out'></i>
                            <span>Log out</span>
                    </NavLink>
                </div>
                <div className='sidebar-bottom'>
                    <h4>Bách diệp</h4>
                </div>
            </div>
        )
    }else 
    return(
        <div 
            className={
                props.sidebarIsOpen ? 
                'sidebar' : 'sidebar close'
            }
        >  
            <div className='sidebar-header'>
                <img src={logoSideBar} />
                <h3>Trà sen bách diệp</h3>
            </div>
            <div className='sidebar-menu'>
                <div className='dashboard'>
                    <MdControlCamera onClick={_closeSidebar} size='1.5rem'/>
                    <span>Dashboard</span>
                    <span>new</span>
                </div>
{/*                
                <CustomLinks2 menuLinks={menuLinks} /> */}
                <NavLink to={''} onClick={_returnHome} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                        <i className='fa-solid fa-home'></i>
                        <span>Trang chủ</span>
                </NavLink>
                <NavLink to={'user-info'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                        <i className='fa-solid fa-id-card'></i>
                        <span>User Info</span>
                </NavLink>
                <NavLink to={'password-changing'} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                        <i className='fa fa-key'></i>
                        <span>Change Password</span>
                </NavLink>
                <NavLink onClick={_logout} to={''} className={({ isAcitve }) => isAcitve ? 'menu-item active' : 'menu-item'}>
                        <i className='fa-solid fa-sign-out'></i>
                        <span>Log out</span>
                </NavLink>
            </div>
            <div className='sidebar-bottom'>
                <h4>Bách diệp</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        toggleSidebar: header => {
            dispatch(viewActions.toggleSidebar(header));
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)  (Sidebar);