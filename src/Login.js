import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import {auth, provider} from './firebase'
import { actionTypes, initialState } from './reducer';
import { useStateValue } from './StateProvider';
import {initailState} from './reducer'

function Login() {

    const [ user = initialState.user, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result.user);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error)=>{alert(error.message)})

    }
  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://support.content.office.net/en-us/media/fd1c05fb-9ded-4854-a5f8-40ba00b13457.png" alt="app-icon" />
            <div className="login___text">
                <h1>Sign in to App</h1>
            </div>
            <Button onClick={signIn} >Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login