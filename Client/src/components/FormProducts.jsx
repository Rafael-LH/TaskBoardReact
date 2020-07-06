import React from 'react';
import { createPortal } from 'react-dom'
import FormComponent from './FormComponent'

const FormComponentProducts = ({ onClose, dataProducts, isUpdate, idProduct }) => (
  createPortal(
    <FormComponent
      onClose={onClose}
      dataProducts={dataProducts}
      isUpdate={isUpdate}
      idProduct={idProduct}
    />,
    document.getElementById('form-products')
  )
)
export default FormComponentProducts;