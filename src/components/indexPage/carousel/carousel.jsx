import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import one from '../../../assets/img/carouselImg/1.webp'
// import two from '../../../assets/img/carouselImg/2.webp'
// import free from '../../../assets/img/carouselImg/3.webp'
// import four from '../../../assets/img/carouselImg/4.webp'
import five from '../../../assets/img/carouselImg/5.webp'

class Slider extends Component{
    render() {
        return (
            <div>
                {/*<Carousel autoPlay={true}*/}
                {/*infiniteLoop={true}*/}
                {/*// width={1200}*/}
                {/*showArrows={false}*/}
                {/*showIndicators={false}*/}
                {/*showStatus={false}*/}
                {/*showThumbs={false}*/}
                {/*swipeable = {true}*/}
                {/*emulateTouch={true}*/}
                {/*dynamicHeight={true}*/}
                {/*>*/}
                {/*<div>*/}
                {/*<img alt='Фото землі' src={one} />*/}
                {/*/!*<p className="legend">Legend 1</p>*!/*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<img alt='Фото землі' src={two} />*/}
                {/*/!*<p className="legend">Legend 2</p>*!/*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<img alt='Фото землі' src={free} />*/}
                {/*/!*<p className="legend">Legend 3</p>*!/*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<img alt='Фото землі' src={four} />*/}
                {/*/!*<p className="legend">Legend 4</p>*!/*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<img alt='Фото землі' src={five} />*/}
                {/*/!*<p className="legend">Legend 5</p>*!/*/}
                {/*</div>*/}
                {/*</Carousel>*/}
            </div>

        );
    }
}
export default Slider;