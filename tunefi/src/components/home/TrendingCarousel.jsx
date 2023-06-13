import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';

import './TrendingCarousel.css';

const TrendingCarousel = () => {
    return (
        <Carousel className="w-75">
            <Carousel.Item>
                <Row>
                    <img src={'https://www.webdesignerdepot.com/cdn-origin/uploads/album_artwork/the-darkside-of-the-moon.jpg'} className="w-25 rose" />
                    <img src={'https://tessasnart21.files.wordpress.com/2012/09/bruno-mars-doo-wops-hooligans-album-cover.jpg'} className="w-25 rose" />
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTFNWYFkWWuzW268BrYBdDY0klwDICiGWwpVuEEJBDQ&usqp=CAU&ec=48665699'} className="w-25 rose" />
                    <img src={'https://cdns-images.dzcdn.net/images/cover/0bc1746b894f098331772bfbff6b8c2e/264x264.jpg'} className="w-25 rose" />
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <img src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-and-clean-album-cover-art-design-template-01c4f74eff5e6a6b8a96bbe80a14a09c_screen.jpg?ts=1581026216'} className="w-25 rose" />
                    <img src={'https://staceygibbons123a2.files.wordpress.com/2013/09/minim.jpg'} className="w-25 rose" />
                    <img src={'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/simple-pop-album-cover-design-template-c5a54cbc4fc51c4476d226309439fce8_screen.jpg?ts=1610078422'} className="w-25 rose" />
                    <img src={'https://savagethrills.com/wp-content/uploads/2018/05/savagethrills-savage-thrills-art-cover-album-music-fr.jpeg'} className="w-25 rose" />
                </Row>
            </Carousel.Item>
        </Carousel>
    );
}

export default TrendingCarousel;