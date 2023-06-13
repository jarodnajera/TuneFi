import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import tf_logo from '../../assets/TF_Logo.svg';
import search_icon from '../../assets/search_icon.svg';

import './Navbar.css';

const Navbar = () => {
    const [auth, setAuth] = useState(false);
    const [username, setUsername] = useState('');
    const [query, setQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const CheckAuth = async () => {
            let response = await fetch('http://localhost:3001', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            let data = await response.json();

            console.log(data);

            if (data.status) {
                setAuth(true);
                setUsername(data.screen_name);
            }
            else {
                setAuth(false);
            }
        }

        CheckAuth();
    }, [location]);

    const HandleLogOut = () => {
        fetch('http://localhost:3001/api/auth/logout', {
            method: 'GET',
            credentials: 'include',
        })
        navigate('/');
    }

    const HandleSearch = () => {
        navigate(`/search/${query}`);
        console.log(query);
    }

    return (
        <nav id='navbar'>
            <Link to='/'><img id='logo' src={tf_logo} /></Link>
            
            <div id='nav-tabs'>
                {auth ? 
                        <>
                            <Button variant='dark' onClick={HandleLogOut}>Log Out</Button>
                            <Link to='/'>Home</Link>
                            <Link to={`/artist/${username}/music`}>Profile</Link>
                        </>
                    : <Link to='login'>Login/Sign Up</Link>}
            </div>
            <div id="tagline"> by small artists, for small artists</div>
            <div id="search-container">
                <input type="search" id="search" placeholder="search for artist/song" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button id="search-btn" onClick={HandleSearch}>
                    <img id="search-icon" src={search_icon} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;