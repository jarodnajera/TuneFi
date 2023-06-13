import { Form, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div id='signup-page'>
            <div className="signup-container">
                <h1>Welcome to TuneFi</h1>
                <Form method='post' id='signup-form'>
                    <div>Username</div>
                    <input
                        placeholder='username...'
                        aria-label='username'
                        type='text'
                        name='username'
                    />
                    <br />
                    <div>Screen Name</div>
                    <input
                        placeholder='screen name...'
                        aria-label='screen name'
                        type='text'
                        name='screen_name'
                    />
                    <br />
                    <div>Password</div>
                    <input
                        placeholder='password...'
                        aria-label='password'
                        type='password'
                        name='password'
                    />
                    <br />
                    <div>Email</div>
                    <input 
                      placeholder='email...'
                      aria-label='email'
                      type='text'
                      name='email'
                    />
                    <br />
                    <Button id='signup-btn' variant='dark' type='submit'>Sign Up</Button>
                </Form>
                <br />
                <div>Already have an account?</div>
                <Button  variant='dark' onClick={() => navigate('/login')}>Login</Button>
            </div>
        </div>
    );
}

export default SignUp;