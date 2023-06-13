import './NewsGrid.css';

import lodea from '../../assets/lodea.jpeg';
import lawn_darts from '../../assets/lawn_darts.png';
import bp from '../../assets/bp.png';

const NewsGrid = () => {
    return (
        <div id="news-grid">
            <div id="main-news">
                <img id='lodea-img' src={lodea} />
                <div id='lodea-caption'>Local IE Indie band Lodea coming out with an album soon!</div>
            </div>
            <div id="side-news">
                <div className="side-wrapper">
                    <img className='side-img' src={lawn_darts} />
                    <div className='side-caption'>Stream Lawn Darts!</div>
                </div>
                <div className="side-wrapper">
                    <img className='side-img' src={bp} />
                    <div className='side-caption'>Stream Bird Photos!</div>
                </div>
            </div>
        </div>
    );
};

export default NewsGrid;