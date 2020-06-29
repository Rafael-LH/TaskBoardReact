import React, { useState, useEffect } from 'react';
import TableComponent from '../components/TableComponent';
import FloatButton from './FloatButton';
import FormProducts from './FormProducts';

const Table = () => {
  const [modal, setModal] = useState(false);

  /**
   * Handlers
   */
  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
    console.log(e.target);
  }
  const handleCloseModal = () => {
    setModal(false);
  }
  return (
    <>
      <TableComponent />
      <FloatButton handleClick={handleClick} />
      {
        modal &&
        <FormProducts onClose={handleCloseModal} />
      }
    </>
  )
}

export default Table;