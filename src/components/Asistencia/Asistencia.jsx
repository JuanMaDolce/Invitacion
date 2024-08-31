import '../../styles/Asistencia.css'
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';


const Asistencia = () => {

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
  };

  return (

    <div className='asistencia'>
      <div className='confirmacion'>
          <h1>Confirmación</h1>
          <p>Confirmar asistencia hasta el 1 de Octubre.</p>
          <p>En caso de contar con alguna restricción alimentaria como, por ejemplo, celiaco, vegano o vegetariano podés especificarlo debajo en la sección datos importantes.</p>
      </div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div>
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
          <div>
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
          <div>
            <label htmlFor="comentarios">Comentarios:</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Asistencia