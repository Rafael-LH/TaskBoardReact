import React from 'react';

const TableComponent = ({ listProducts }) => {
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
            <tr>
              <td>{item.product}</td>
              <td>{item.brand}</td>
              <td>{item.description}</td>
              <th>{item.price}</th>
              <th>
                <button>Actualizar</button>
                <button>Eliminar</button>
              </th>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
export default TableComponent;