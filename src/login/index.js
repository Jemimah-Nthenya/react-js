
import'./index.css'
import { useState } from 'react';
import{login} from './utils';

const Login =() => {
    const [UserName,setUserName] =useState('');
    console [password,setPassword] = useState('');
    console.log({UserName});

    const handleLogin =async (e) => {
        e.preventDefault();
        console.log('are we here');
    }
    return(
        <form onSubmit={handleLogin}>
            <h2>Login Form</h2>
            <input placeholder="Enter username" type='text' onChange={(e) => setUserName(e.target.value)} />
            <br/>
            <input placeholder="Enter password" type='text' onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <button type='submit'> Login</button>
        </form>
    )
}

export default Login;