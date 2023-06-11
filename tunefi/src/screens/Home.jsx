import NewsGrid from '../components/home/NewsGrid';
import Trending from '../components/home/Trending';

import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <NewsGrid />
            <Trending />
        </div>
    );
}

export default Home;