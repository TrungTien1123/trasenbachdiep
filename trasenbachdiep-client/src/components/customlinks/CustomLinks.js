import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const GroupLinks = styled.div`
    a{
        color:#fff;
        display:block;
        text-decoration:none;
        padding:10px 10px;
    }
    a:hover{
        color: orange;
    }
    .menu-item.active{
        color: #aabc44
    }
`

const CustomLinks = props => { 
    // console.log('Props of the customlinks:' + props);
    // console.log(  props);
    return ( 
        <GroupLinks>
            {
                props.menuLinks.map((item,index) =>{
                    let active = false;
                    if(props.location.pathname===item.path) active =true;
                    
                    return(
                        <Link 
                        key={index} 
                        to = {item.path}
                        className ={active?'menu-item active' : 'menu-item'}>
                        <span>
                            {item.text}
                        </span>
                        </Link>
                    )
                })
            }
        </GroupLinks>
            
    ) 
}

export default withRouter(CustomLinks);