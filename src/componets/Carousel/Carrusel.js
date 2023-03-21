import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImagenCarrusel from "./ImagenCarrusel";

const Carrusel = ({ data }) => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showArrows={false}
        >
            {data.map((imagen, indice) => {
                return <ImagenCarrusel imagen={imagen} key={indice} />
            })}
        </Carousel>
    );
};

export default Carrusel