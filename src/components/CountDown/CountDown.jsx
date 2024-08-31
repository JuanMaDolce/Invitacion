import '../../styles/CountDown.css'
import { useEffect, useState } from 'react'

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

    return (
        <div className='countDown'>
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
    )
}

export default CountDown