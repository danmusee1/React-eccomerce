import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from"./Orders";

import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


import Footer from './components folder/Footer';

function App() {


 

const promise= loadStripe("pk_test_51HQt6QCzI6o6ZO7IivGd1kGPUwlo0OwF5k2ZnXJ3CkFTUCZ3WxGBZEBsxOkDTQBlYh4S6dvQstv0kYnpUMuKm7Jc00phzsbiBW");


const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads..
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user was /is loged in

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
      //cleanups operations go here
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className='app'>
      
        <Switch>
        <Route path='/orders'>
          <Header/>
            <Orders />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
             
            <Payment />
            </Elements>
          
           
          
           
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      
<Footer />
      </div>
        
  
  
    </Router>

    
  );
}
export default App;
