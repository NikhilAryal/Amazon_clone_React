import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from "./StateProvider";
import  reducer, { initialState }  from './Reducer';


ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState = {initialState} reducer = {reducer}>                   {/* Look Ma, no comma   */}
          <App />
      {/*    the children passed in StateProvider is used as <App />    */}
      </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// DataLayer has been wrapped around App within React Strict mode