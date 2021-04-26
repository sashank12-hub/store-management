import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router';



import './Login.css';


function Login() {
    let history=useHistory()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const initiateLogin =  e =>  {
        e.preventDefault();
        if(!username)  {
            alert('username is required');
            return;
        }
        if(!password) {
            alert('password is required')
            return;
        }
        if(username!==password) {
            alert('Please enter valid credentials');
            return;
        }
       
        if(username == password && username=="test-admin"){
           window.localStorage.setItem('user','admin')
            alert('Login Successful as admin');
        history.push('/store-management/medicine'); 
            return;

        }
        else if(username == password && username=="test-sales"){
            window.localStorage.setItem('user','sales')
            alert('Login Successful as sales executive');
            history.push('/store-management/customer'); 
            return;
        }
         
    }

    return (
        <Fragment>
            <main className="MainContainer">
            <h1 style={{color:"white",textAlign:'center'}}>Store Management</h1>
            <div>
                <form className="LoginForm">
                    
                    <input 
                        className="InputField" 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter Username" />
                    <input 
                        className="InputField" 
                        type="password"
                         name="password" 
                         id="password" 
                         value={password}
                         onChange={handlePasswordChange}
                         placeholder="Enter Password" />
                    <button 
                        className="Button" 
                        id="login-btn"
                        onClick={initiateLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
            </main>
        </Fragment>
    )
}

export default Login;