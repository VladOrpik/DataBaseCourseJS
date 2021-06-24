import React, { useContext, useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar.js';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';

const App = observer(()=> {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    check().then(data =>{
      user.setUser(data);
      user.setIsAuth(true);
    }).finally(()=> setLoading(false));
  }, []);

  

  console.log(user.isAuth);

  return (
    <BrowserRouter>
      <NavBar />
        <div className="RoutePages">
            <AppRouter />
        </div>
      
    </BrowserRouter>
    
  );
})

export default App;
