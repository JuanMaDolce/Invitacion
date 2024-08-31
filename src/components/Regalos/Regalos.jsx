import { useState } from 'react'
import "../../styles/Regalos.css"

import gift from "../../assets/caja-de-regalo-con-encaje-grande.png"



const Regalos = () => {

    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText); 
    };

    return(
        <div className="regalos">
            <h1>REGALOS</h1>
            <img src={gift} alt="regalos" />
            <p>El mejor regalo es tu presencia en este día tan especial</p>
            <p>Pero si querés tener un detalle con nosotros, bienvenido sea!</p>
            <div className='cbu'>
                <div className={`datos-container ${showText ? 'show' : 'hide'}`}>
                    <p>CBU 0140000703100038365764 (Juan Manuel Dolce / Maria Cecilia Torres)</p>
                </div>
                <button onClick={handleClick}>
                    {showText ? 'Ver Datos' : 'Ver Datos'}
                </button>
            </div>
        </div>
    )
}

export default Regalos