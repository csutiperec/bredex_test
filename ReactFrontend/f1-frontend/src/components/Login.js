import axios from 'axios';
import {useState} from 'react';
import Button from './Button';
import { useSession, useSessionUpdate } from '../SessionProvider';
import '../styling/Login.css';
import ResponseMessage from './ResponseMessage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMsg, setResponseMsg] = useState('');
    const session = useSession();
    const changeSession = useSessionUpdate();

    const baseURL = 'http://localhost:8080/api/users';
    
    const onLoginClick = () => {
        axios.post(baseURL+'/login',{
            username: username,
            password: password
        })
        .then((response) => {
            if(response.status === 200){
                changeSession({
                    username: username,
                    accessToken: response.data.accessToken
                });
            }
        })
        .catch((error)=>{
            setResponseMsg(error.response.data)
        })
    };

    const onLogoutClick = () => {
        changeSession({
            username: '',
            accessToken: ''
        });;
        setResponseMsg('');
    };

    const onRegisterClick = () => {
        axios.post(baseURL+'/register',{
            username: username,
            password: password
        })
        .then((response) => {
            if(response.status === 200){
                changeSession({
                    username: username,
                    accessToken: response.data.accessToken
                });
            }
        })
        .catch((error)=>{
            setResponseMsg(error.response.data)
        })
    };

    if(session.accessToken!=='')
    {
        return (
            <div className='login-container'>
                <div style={{textAlign:'center'}}>
                    Logged in as {username}
                </div>
                <Button text='Logout' onClick={onLogoutClick}/>
            </div>
        )
    }
    return (
        <div className='login-container'>
            <div className='loginform-container'>
                <div>Username:</div>
                <input onChange={event => setUsername(event.target.value)}></input>
                <div>Password:</div>
                <input onChange={event => setPassword(event.target.value)} type='password'></input>
            </div>

            <div className='.button-container'>
                <Button text='Login' onClick={onLoginClick}/>
                <Button text='Register' onClick={onRegisterClick}/>
            </div>
            <ResponseMessage message={responseMsg} color='white'/>
        </div>
    )
}

export default Login;
