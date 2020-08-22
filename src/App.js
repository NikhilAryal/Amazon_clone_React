import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login.js';
import { useStateValue } from "./StateProvider";
import { auth }  from "./Firebase";


function App() {

    const [{ user }, dispatch] = useStateValue();
    // useEffect is *************** POWERFUL ***************
    // code that runs on a given condition, ALSO CALLED HOOKS

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in

                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                });
            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null,
                });
            }
        });

        return () => {
            // cleanups here
            unsubscribe();
        };

    }, []);
    console.log("USER__IS__ => ", user);



  return (
    <Router>
        <div className="app">
            <Switch>
                <Route path="/checkout">
                    <Header/>
                    <Checkout />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Header/>
                    <Home />

                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

{/*
    React-router-dom installed for routing stuffs
*/}
