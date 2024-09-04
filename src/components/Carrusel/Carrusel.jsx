import Gallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import { Photos } from "../../assets/Photos"
import '../../styles/Gallery.css'



const Carrusel = () => {
        
        return(
                <Gallery  additionalClass='gallery'
                items={Photos}
                showPlayButton={false}
                autoPlay={false}
            />
            )
}

export default Carrusel

