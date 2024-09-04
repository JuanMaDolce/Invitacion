import '../../styles/Footer.css'
import fin from '../../assets/fin.JPG' 

const Footer = () => {
    return(
        <div className='footer'>
            <h1>Te esperamos!</h1>
            <img className='fin' src={fin} alt="fin" />
        </div>
    )
}

export default Footer