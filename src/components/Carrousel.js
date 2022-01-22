import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import prueba from '../image/prueba.jpg';


const Carrousel = ({images}) => {
    return(
        <Carousel stopOnHover={true} showArrows={true} showStatus={true} showIndicators={true} showThumbs={true} thumbWidth={80} centerMode={true} centerSlidePercentage={80} infiniteLoop={true} autoFocus={true} autoPlay={true} fade={true}>
            {
                images.map((i)=>{
                    return <div><img className="w-100" src={i}></img></div>
                })
            }
    </Carousel>
    )
}


export default Carrousel;
