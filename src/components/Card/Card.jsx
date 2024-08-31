import '../../styles/Card.css'
import img from '../../assets/janos.jpg'

const Card = () => {
    return(
        <div className='card'>
            <img src={img} alt="Janos del Viso" />
            <h1>Janos Del Viso</h1>
            <p>Ruta 8 km 67</p>
            <p>RAv. Ing. Eduardo Madero 630</p>
            <p>Del Viso, Pcia. de Buenos Aires</p>
            <a href="https://maps.app.goo.gl/F8qUumnjFjHMzxVMA">
                <button>
                    Ver Mapa
                </button>
            </a>
        </div>
    )
}

export default Card
