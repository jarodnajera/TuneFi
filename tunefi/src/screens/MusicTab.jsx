import { Link } from 'react-router-dom';

import './Tabs.css';

const MusicTab = () => {
    return (
        <div className='artist-nav'>
            <div className='nav-tabs'>
                <Link to='../music' className='nav-tab active'>Music</Link>
                <Link to='../events' className='nav-tab'>Events</Link>
                <Link to='../community' className='nav-tab'>Community</Link>
            </div>
        </div>
    );
}

export default MusicTab;