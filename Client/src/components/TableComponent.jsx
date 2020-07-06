import React, { useState, useEffect } from 'react';

const TableComponent = ({ listProducts, onAction, handleGetProduct }) => {
  const [idDeleteProduct, setIdDeleteProduct] = useState(null);

  const handleDeleteProduct = async (id) => {
    try {
      await fetch('/task/', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
      setIdDeleteProduct(null);
      onAction();
    } catch (error) {
      setIdDeleteProduct(null);
      onAction();
    }
  }

  // effects
  useEffect(() => {
    const deleteProduct = async () => await handleDeleteProduct(idDeleteProduct);
    if (idDeleteProduct) deleteProduct();
  }, [idDeleteProduct]);

  return (
    <table>
      <tbody>
        <tr>
          <th>Producto</th>
          <th>Marca</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
        {
          listProducts.map(item => (
            <tr key={item._id} >
              <td>{item.product}</td>
              <td>{item.brand}</td>
              <td>{item.description}</td>
              <th>{item.price}</th>
              <th>
                <button onClick={() => handleGetProduct(item._id)}>Actualizar</button>
                <button onClick={() => setIdDeleteProduct(item._id)}>Eliminar</button>
              </th>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
export default TableComponent;