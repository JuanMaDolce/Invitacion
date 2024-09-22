import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import '../../styles/Header.css'

const Header = () => {

    const containerRef = useRef(null)
        
    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    useEffect(()=>{
            if (isInView){
                mainControls.start("visible")
            }
    }, [isInView,mainControls])

    return(
        <div className='header'>
            <motion.h1 
                ref={containerRef} 
                animate={mainControls}
                initial="hidden"
                variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: {
                        opacity: 1,
                        y: 0,
                        },
                    }}
                transition={{
                            duration: 0.8,
                            ease: [1,1,.8,1],
                            }}>
                    Ceci & Juanma</motion.h1>
            <motion.h2
                ref={containerRef} 
                animate={mainControls}
                initial="hidden"
                variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                        opacity: 1,
                        y: 0,
                        },
                    }}
                transition={{
                    duration: 0.8,
                    ease: [1,1,.8,1],
                    }}>
                Nos Casamos!</motion.h2>
        </div>
    )
}

export default Header