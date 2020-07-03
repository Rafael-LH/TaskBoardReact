import React from 'react';
import { createPortal } from 'react-dom'
import FormComponent from './FormComponent'

const FormComponentProducts = ({ onClose }) => (
  createPortal(
    <FormComponent onClose={onClose} />,
    document.getElementById('form-products')
  )
)
export default FormComponentProducts;