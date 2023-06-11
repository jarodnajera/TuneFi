import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

import './TrendingCarousel.css';

const TrendingCarousel = () => {
    return (
        <Carousel className="w-75">
            <Carousel.Item>
                <Row>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg'} className="w-25 rose" />
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}

export default TrendingCarousel;