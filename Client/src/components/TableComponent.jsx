import React, { useState, useEffect } from 'react';

const TableComponent = ({ listProducts, onAction }) => {
  const [idDeleteProduct, setIdDeleteProduct] = useState(null);
  const [idUpdateProduct, setIdUpdateProduct] = useState(null);

  // handlers
  const handleUpdateProduct = async (id) => {

  }
  const handleDeleteProduct = async (id) => {
    await fetch('/task/', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    });
    setEventAction(true);
    onAction();
  }

  // effects
  useEffect(() => {
    const updateProduct = async () => await handleUpdateProduct(idUpdateProduct);
    const deleteProduct = async () => await handleDeleteProduct(idDeleteProduct);

    if (idUpdateProduct) updateProduct()
    if (idDeleteProduct) deleteProduct();

  }, [idUpdateProduct || idDeleteProduct]);

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
                <button onClick={() => setIdUpdateProduct(item._id)}>Actualizar</button>
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