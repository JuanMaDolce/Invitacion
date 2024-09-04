import '../../styles/Card.css'
import img from '../../assets/janos.jpg'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const Card = () => {

    const containerRef = useRef(null)
        
    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(()=>{
            if (isInView){
                mainControls.start("visible")
            }
    }, [isInView,mainControls])

    return(
        <motion.div className='card'
                ref={containerRef} 
                animate={mainControls}
                initial="hidden"
                variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: {
                        opacity: 1,
                        y: 0,
                        },
                    }}
                transition={{duration: 0.8, ease: [1,1,.8,1]}}>
            <div className='cardContainer'>
            <div className='date'>
                    <h1>Domingo 6 de Octubre</h1>
                    <h2>16 Horas</h2>
                </div>
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
        </motion.div>
    )
}

export default Card
