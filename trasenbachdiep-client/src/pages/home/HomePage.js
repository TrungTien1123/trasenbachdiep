import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import ListGroups from './listgroups/ListGroups';
import Settings from './settings/Settings';
import UserInfo from './userinfo/UserInfo';

import WithLoading from '../../components/HOC/withLoading/WithLoading';
import './HomePage.css';
import { toggleCart } from '../../redux/reduxModules';
import viewActions from '../../redux/actions/viewActions';
import { connect } from 'react-redux';


const UserWithLoading = WithLoading(UserInfo)
const ListGroupsWithLoading = WithLoading(ListGroups)
const SettingsWithLoading = WithLoading(Settings)


const HomePage = (props) => {


    return(
        <div className='home-container'>
            <Sidebar sidebarIsOpen={props.sidebarIsOpen}/>
            <div className={props.sidebarIsOpen ? 'home-main' : 'home-main sidebar-close'}>
                <Header displayMenuIcon = {true} nav= {false}/>
                <div className='main-content'>
                    {/* react router ver 5 */}
                    {/* <Switch>
                        <Route path="/user-info" component={UserWithLoading} />
                        <Route path="/list-groups" component={ListGroupsWithLoading} />
                        <Route path="/settings" component={SettingsWithLoading} />
                    </Switch> */}

                    {/* react router ver 6 */}
                    <Outlet />
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps) (HomePage);