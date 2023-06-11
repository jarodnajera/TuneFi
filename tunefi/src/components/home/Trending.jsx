import TrendingCarousel from './TrendingCarousel';

import './Trending.css';

const Trending = () => {
    return (
        <div id="trending">
            <div id="title">Trending</div>
            <div id="carousel">
                <TrendingCarousel />
            </div>
        </div>
    )
};

export default Trending;