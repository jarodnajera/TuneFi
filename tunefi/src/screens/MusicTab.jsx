import { Link } from 'react-router-dom';
import UploadSong from '../components/audio/UploadSong';
import AudioPlayer from '../components/audio/AudioPlayer';

import './Tabs.css';
import './MusicTab.css';


const MusicTab = () => {
    return (
        <div id="music-tab">
            <div className='artist-nav'>
                <div className='nav-tabs'>
                    <Link to='../music' className='nav-tab active'>Music</Link>
                    <Link to='../events' className='nav-tab'>Events</Link>
                    <Link to='../community' className='nav-tab'>Community</Link>
                </div>
            </div>
            <div className='song-upload'>
                <div>Upload Song</div>
                <UploadSong />
            </div>
            <br />
            <div className='audio-player-container'>
                <AudioPlayer />
                <br />
                <AudioPlayer />
            </div>
        </div>
    );
}

export default MusicTab;