import { useState } from 'react'
import "../../styles/Regalos.css"
import { motion } from 'framer-motion';
import gift from "../../assets/caja-de-regalo-con-encaje-grande.png"



const Regalos = () => {

    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText); 
    };

    return(
        <div className="regalos">
            <h1>REGALOS</h1>
            <motion.img src={gift} alt="regalos"
                animate={{rotate:[0,90,0,-90,0]}}
                transition={{
                    duration:1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                }}
            />
            <p>El mejor regalo es tu presencia en este día tan especial</p>
            <p>Pero si querés tener un detalle con nosotros, bienvenido sea!</p>
            <div className='cbu'>
                <div className={`datos-container ${showText ? 'show' : 'hide'}`}>
                    <p>CBU 0140000703100038365764</p>
                    <p>CBU USD 0140000704100052548928</p>
                    <p>(Juan Manuel Dolce / Maria Cecilia Torres)</p>
                </div>
                <button onClick={handleClick}>
                    {showText ? 'Ver Datos' : 'Ver Datos'}
                </button>
            </div>
        </div>
    )
}

export default Regalos