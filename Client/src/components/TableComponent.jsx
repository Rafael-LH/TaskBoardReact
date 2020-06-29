import React from 'react';

const TableComponent = () => (
  <table>
    <tbody>
      <tr>
        <th>Producto</th>
        <th>Marca</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
      <tr>
        <td>Celular</td>
        <td>Apple</td>
        <td>Iphone 11 pro Max</td>
        <th>$20,000.00</th>
        <th>
          <button>Actualizar</button>
          <button>Eliminar</button>
        </th>
      </tr>
    </tbody>
  </table>
)

export default TableComponent;