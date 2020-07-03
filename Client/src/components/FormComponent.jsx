import React, { useState } from 'react'

const FormComponent = ({ onClose }) => {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleClose = () => onClose();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/task/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    onClose();
  }

  return (
    <div className="container-from">
      <button onClick={handleClose}>X</button>
      <form className='form-product' onSubmit={handleSubmit}>
        <input type="text" name='product' placeholder='Producto' onChange={handleChange} />
        <input type="text" name='brand' placeholder='Marca' onChange={handleChange} />
        <input type="text" name='description' placeholder='Descripción' onChange={handleChange} />
        <input type="text" name='price' placeholder='Precio' onChange={handleChange} />
        <button type='submit'>Agregar</button>
      </form>
    </div>
  )
}
export default FormComponent