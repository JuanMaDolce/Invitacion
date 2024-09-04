import '../../styles/Canciones.css'
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 

import { db } from '../../firebase/config';


const Canciones = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [formData, setFormData] = useState({
    primera: '',
    segunda: '',
    tercera: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    
    const canciones = collection(db, "canciones")

    addDoc(canciones, formData)
    

    setFormData({
        primera: '',
        segunda: '',
        tercera: '',
    });
    toggleModal()
  };

  return (

    <div className='canciones'>
        <h1>Elegi 3 canciones que no pueden faltar!</h1>
        <div className='formCanciones'>
            <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="Primer Canción">Primer Canción:</label>
                      <input
                      type="text"
                      id="primera"
                      name="primera"
                      value={formData.primera}
                      onChange={handleChange}
                      required
                      />
              </div>
              <div>
                  <label htmlFor="Segunda Canción">Segunda Canción:</label>
                      <input
                      type="text"
                      id="segunda"
                      name="segunda"
                      value={formData.segunda}
                      onChange={handleChange}
                      required
                      />
              </div>
              <div>
                  <label htmlFor="Tecer Canción">Tercer Canción:</label>
                      <input
                      type="text"
                      id="tercera"
                      name="tercera"
                      value={formData.tercera}
                      onChange={handleChange}
                      required
                      />
              </div>
              <button type="submit">Enviar</button>

              {modal && (
                  <div className="modal-content-canciones">
                    <h2>Canciones Enviadas!</h2>
                    <button className="close-modal" onClick={toggleModal}>
                      X
                    </button>
                  </div>
              )}
            </form>
      </div>
    </div>
  );
}

export default Canciones