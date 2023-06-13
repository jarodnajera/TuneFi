import { Form, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import './Login.css';
import '../components/audio/audio.css';
import '../components/audio/customize-progress-bar.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    const HandleTFA = () => {
        if(username !== '') {
            console.log(username);
            fetch('http://localhost:3001/api/auth/tfa', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: username })
            });
            alert('Code sent to email!');
        }
        else {
            alert('Provide username!');
        }
        
    }

    return (
        <div id='login-page'>
            <div className="login-container">
                <h1>Welcome to TuneFi</h1>
                <Form method='post' id='login-form'>
                    <div>Username</div>
                    <input
                        placeholder='username...'
                        aria-label='username'
                        type='text'
                        name='username'
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div>Password</div>
                    <input
                        placeholder='password...'
                        aria-label='password'
                        type='password'
                        name='password'
                        required
                    />
                    <br />
                    <div>2FA Code: Code will be sent to email</div>
                    <div>Please provide username before sending code!</div>
                    <div id="tfa-container">
                        <input
                            placeholder='2FA Code...'
                            aria-label='tfa'
                            type='text'
                            name='tfa'
                            required
                        />
                        <Button variant='dark' onClick={HandleTFA}>Send Code</Button>
                    </div>
                    <br />
                    <Button id='login-btn' variant='dark' type='submit'>Login</Button>
                </Form>
                <br />
                <div>Don&apos;t have an account yet?</div>
                <Button variant='dark' onClick={() => navigate('/signup')}>Sign Up</Button>
            </div>
        </div>
        
    );
}

export default Login;