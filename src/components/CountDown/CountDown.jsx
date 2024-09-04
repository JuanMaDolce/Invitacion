import '../../styles/CountDown.css'
import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

const targetDate = new Date("2024-10-06T16:00:00")

const getTimeLeft = () =>{
    const totalTimeLeft = targetDate - new Date();
    const Dias = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))
    const Horas = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)
    const Minutos = Math.floor((totalTimeLeft / (1000 * 60 )) % 60)
    const Segundos = Math.floor((totalTimeLeft / 1000) % 60)

    return {Dias, Horas, Minutos, Segundos}
}

const CountDown = () => {

    const [timeLeft, setTimeLeft] = useState( ()=> getTimeLeft() )

    useEffect(() =>{
       const timer = setInterval(()=>{
                        setTimeLeft(getTimeLeft())
                    }, 1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

        const containerRef = useRef(null)
        
        const isInView = useInView(containerRef, { once: true })
        const mainControls = useAnimation()

        useEffect(()=>{
                if (isInView){
                    mainControls.start("visible")
                }
        }, [isInView,mainControls])

    return (
            <motion.div className='countDown'
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
                <div 
                    className='container-boxes'>
                        {Object.entries(timeLeft).map((el) => {
                            const label = el[0]
                            const value = el[1]
                            return(
                                <div className='box'>
                                    <p>{value}</p>
                                    <h2>{label}</h2>
                                </div>  
                            )
                        })}
                </div>
            </motion.div>
    )
}

export default CountDown