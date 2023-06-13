import { Form, useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/audio/AudioPlayer';

import '../components/audio/audio.css';
import '../components/audio/customize-progress-bar.css';
const Login = () => {
    const navigate = useNavigate();

    return (
        <div id='login-page'>
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
                <button type='submit'>Login</button>
            </Form>
            <br />
            <div>Don&apos;t have an account yet?</div>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
            <AudioPlayer/>
            
        </div>
        
    );
}

export default Login;