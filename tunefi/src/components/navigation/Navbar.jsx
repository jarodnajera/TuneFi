import { Link } from 'react-router-dom';

import tf_logo from '../../assets/TF_Logo.svg';
import search_icon from '../../assets/search_icon.svg';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav id='navbar'>
            <Link to='/'><img id='logo' src={tf_logo} /></Link>
            
            <div>
                <Link to='login'>Login/Sign Up</Link>
            </div>
            <div id="tagline"> by small artists, for small artists</div>
            <div id="search-container">
                <input type="search" id="search" placeholder="search for artist/song" />
                <button id="search-btn"><img id="search-icon" src={search_icon} /></button>
            </div>
        </nav>
    );
}

export default Navbar;