import '../../styles/Footer.css'
import fin from '../../assets/fin.jpg' 

const Footer = () => {
    return(
        <div className='footer'>
            <h1>Te esperamos!</h1>
            <h2>Ceci & Juanma</h2>
            <img className='fin' src={fin} alt="fin" />
        </div>
    )
}

export default Footer