import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FlightsStore from './store/FlightsStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);


ReactDOM.render(
    <Context.Provider value={{
      "user": new UserStore(),
      "flight": new FlightsStore()
    }}>
        <App />
    </Context.Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

