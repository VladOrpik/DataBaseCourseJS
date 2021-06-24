import React, { useContext, useState } from 'react';
import './Auth.css';
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, FLIGHT_ROUTE, ADMIN_ROUTE} from '../utils/consts';
import {login, registration} from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';


const Auth = observer(()=>{
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const click = async ()=> {
        try{
            let data;
            if(isLogin){
                data = await login(email, password);
                user.setUser(data);
                user.setIsAuth(true);
            }else{
                data = await registration(email, password); 
                history.push(LOGIN_ROUTE);
            }
            
            
             
            
        }catch(e){
            alert(e.response.data.message);
        }
        

    };

    return(
        <div className="AuthBlock">
            {isLogin ?
                <div className="HeaderBlock"> АВТОРИЗАЦИЯ</div>
                :
                <div className="HeaderBlock"> РЕГИСТРАЦИЯ</div>
            }
            <div className="DataBlock">

                <input id="email" type="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
                <label className="emailLabel" for="email">Your email</label>
                <div className="spanLineFirst"><span className="line"></span></div>
                

                <input id="password" type="password" required value={password} onChange={e=>setPassword(e.target.value)}/>
                <label className="passwordLabel" for="password" >Your password</label>
                <div className="spanLineSecond"><span className="line"></span></div>
            </div>
            {isLogin ? 
                <div className="AcceptBlock">
                    <button onClick={click}>Login</button>
                </div>
                :
                <div className="AcceptBlock">
                    <button onClick={click}>Register</button>
                </div>

            }
            {isLogin ?
                <div className="LinkBlock">Нету аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></div>  
                :
                <div className="LinkBlock">Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></div>  
            }
            
           
        </div>
    )
});

export default Auth;