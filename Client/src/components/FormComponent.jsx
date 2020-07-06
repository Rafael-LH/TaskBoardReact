import React, { useState } from 'react'

const FormComponent = ({ onClose, dataProducts, isUpdate, idProduct }) => {
  const [form, setForm] = useState({
    product: isUpdate ? dataProducts.product : '',
    brand: isUpdate ? dataProducts.brand : '',
    description: isUpdate ? dataProducts.description : '',
    price: isUpdate ? dataProducts.price : '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim()
    })
  }
  const handleClose = () => onClose();

  const updateProduct = async () => {
    await fetch(`/task/${idProduct}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
  }

  const createProduct = async () => {
    await fetch('/task/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      await updateProduct();
    } else {
      await createProduct();
    }
    onClose();
  }

  return (
    <div className="layout-container-from">
      <div className="container-form-products">
        <button onClick={handleClose}>X</button>
        <form className='form-product' onSubmit={handleSubmit}>
          <input
            type="text"
            name='product'
            placeholder='Producto'
            defaultValue={isUpdate ? dataProducts.product : ''}
            onChange={handleChange} />
          <input
            type="text"
            name='brand'
            placeholder='Marca'
            defaultValue={isUpdate ? dataProducts.brand : ''}
            onChange={handleChange} />
          <input
            type="text"
            name='description'
            placeholder='Descripción'
            defaultValue={isUpdate ? dataProducts.description : ''}
            onChange={handleChange} />
          <input
            type="text"
            name='price'
            placeholder='Precio'
            defaultValue={isUpdate ? dataProducts.price : ''}
            onChange={handleChange} />
          <div className="container-btn-save">
            <button type='submit'>
              {isUpdate ? 'Actualizar' : 'Agregar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FormComponent