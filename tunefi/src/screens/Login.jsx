import { Form, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Login.css';
import '../components/audio/audio.css';
import '../components/audio/customize-progress-bar.css';

const Login = () => {
    const navigate = useNavigate();

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
                    />
                    <br />
                    <div>Password</div>
                    <input
                        placeholder='password...'
                        aria-label='password'
                        type='password'
                        name='password'
                    />
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