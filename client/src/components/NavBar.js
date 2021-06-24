import React, { useContext } from 'react';
import './NavBar.css';
import './AdaptiveMenuScript.js';
import {observer} from 'mobx-react-lite';
import { Context } from '../index';
import { useHistory } from 'react-router';
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, FLIGHTS_ROUTE} from '../utils/consts';

const NavBar = observer(()=>{
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut =()=>{
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        history.push(FLIGHTS_ROUTE);
    }
    if(user.isAuth){
        return (
            <div className="AppBar">
            
                <div className="mobileMenuVersion">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>
                </div>
            
                <div className="sectionsMenu">
                <button color="white" onClick ={()=> history.push(ADMIN_ROUTE)}>Admin</button>
                <button color="primary" onClick ={()=> history.push(LOGIN_ROUTE)}>Login</button>
                <button color="primary" onClick ={()=> history.push(REGISTRATION_ROUTE)}>Registration</button>
                <button color="primary" onClick ={()=> history.push(FLIGHTS_ROUTE)}>Flights</button>
                <button color="primary" onClick={logOut}>LogOut</button>
                </div> 
            
            </div>  
                ) 
    }else{
        return (
            <div className="AppBar">
            
                <div className="mobileMenuVersion">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>
                </div>
            
                <div className="sectionsMenu">
                <button color="primary" onClick ={()=> history.push(LOGIN_ROUTE)}>Login</button>
                <button color="primary" onClick ={()=> history.push(REGISTRATION_ROUTE)}>Registration</button>
                <button color="primary" onClick ={()=> history.push(FLIGHTS_ROUTE)}>Flights</button>
                </div> 
            
            </div>  
                ) 
    }
    
});
export default NavBar;