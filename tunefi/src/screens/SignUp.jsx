import { Form, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div id='signup-page'>
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
                <div>Email</div>
                <input 
                    placeholder='email...'
                    aria-label='email'
                    type='text'
                    name='email'
                />
                <br />
                <div>Password</div>
                <input 
                    placeholder='password...'
                    aria-label='password'
                    type='password'
                    name='password'
                />
                <button type='submit'>Sign Up</button>
            </Form>
            <br />
            <div>Already have an account?</div>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    );
}

export default SignUp;