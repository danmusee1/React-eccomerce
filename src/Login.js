import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    //prevents from refreshing
    e.preventDefault();
    //some funcy firebase login shit
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message));
  }
  const register = e => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and pasword
        
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))

    //do fancy frirebase register shit
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src='https://dandrey.000webhostapp.com/no%20niche.PNG'
          alt='https://dandrey.000webhostapp.com/my%20logo.PNG'
        />
      </Link>
      <div className='login_container'>
        <h1>sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type='submit' onClick={signIn} className='login_signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to our app  Conditions of use &
          Sale.Please see our Privacy Notice, our Cookies notice and our
          Interest - Based Ads notice.
        </p>

        <button onClick={register} className='login_registerButton'>
          Create your  Account
        </button>
      </div>
    </div>
  );
}

export default Login;
