import '../../styles/Asistencia.css'
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';


const Asistencia = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [formData, setFormData] = useState({
    sino: '',
    nombre: '',
    comentarios: '',
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

    setDoc(doc(db, "asistencia", `${formData.nombre}`), formData);

    setFormData({
      sino: '',
      nombre: '',
      comentarios: '',
    });
    toggleModal()
  };

  return (

    <div className='asistencia'>
      <div className='confirmacion'>
          <h1>Confirmación</h1>
          <p className='texto'>Confirmar asistencia hasta el 20 de Septiembre.</p>
          <p className='texto'>En caso de contar con alguna restricción alimentaria como, por ejemplo, celiaco, vegano o vegetariano podés especificarlo debajo en la sección de comentarios.</p>
      </div>
      <div className='asistenciaForm'>
        <form onSubmit={handleSubmit}>
          <div className='asistenciaFormDiv'>
            <label htmlFor="nombre">Nombre y Apellido:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className='asistenciaFormDiv'>
            <label htmlFor="sino">Asistiré / No Asistiré:</label>
            <input
              type="text"
              id="sino"
              name="sino"
              value={formData.sino}
              onChange={handleChange}
              required
            />
          </div>
          <div className='asistenciaFormDiv'>
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
          {modal && (
                  <div className="modal-content-asistencia">
                    <h2>Asistencia Enviada!</h2>
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

export default Asistencia