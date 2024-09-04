import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import '../../styles/Footer.css'
import fin from '../../assets/fin.JPG' 

const Footer = () => {

    const containerRef = useRef(null)
        
    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(()=>{
            if (isInView){
                mainControls.start("visible")
            }
    }, [isInView,mainControls])

    return(
        <motion.div className='footer'
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
            <h1>Te esperamos!</h1>
            <img className='fin' src={fin} alt="fin" />
        </motion.div>
    )
}

export default Footer