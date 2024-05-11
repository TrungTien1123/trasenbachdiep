import { menuLinks } from '../../data';
import CustomLinks from '../customlinks/CustomLinks';
import './Sidebar.css';

import store from '../redux/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
console.log(store);

const Sidebar = props => {
    // console.log('state from store:');
    // console.log(store.getState().counter.count);
    // console.log(store.getState().counter.x);
    // console.log(store.getState().counter.y);

    const sidebarIsOpen = useSelector(state => state.view.sidebarIsOpen)

    useEffect(()=>{
        console.log(localStorage.getItem('token'));
    })
   
    return( 
        <div className={sidebarIsOpen? "sidebar" : 'sidebar close'}>
            <h1>Sidebar</h1>
            <CustomLinks menuLinks={menuLinks}/>
        </div>
    )
}

export default Sidebar;