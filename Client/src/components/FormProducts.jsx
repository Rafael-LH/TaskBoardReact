import React, { useState } from 'react';
import { createPortal } from 'react-dom'

const FormComponentProducts = ({ onClose }) => {
  const [form, setForm] = useState([]);


  /**
   * Handlers
   */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  const hanldeClose = () => onClose();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
  return (
    createPortal(
      <div className="container-from">
        <button onClick={hanldeClose}>X</button>
        <form className='form-product' onSubmit={handleSubmit}>
          <input type="text" name='product' placeholder='Producto' onChange={handleChange} />
          <input type="text" name='brand' placeholder='Marca' onChange={handleChange} />
          <input type="text" name='description' placeholder='Descripción' onChange={handleChange} />
          <input type="text" name='price' placeholder='Precio' onChange={handleChange} />
          <button type='submit'>Agregar</button>
        </form>
      </div>,
      document.getElementById('form-products')
    )
  )
}
export default FormComponentProducts;