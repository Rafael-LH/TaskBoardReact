import React, { useState, useEffect } from 'react';
import TableComponent from '../components/TableComponent';
import FloatButton from './FloatButton';
import FormProducts from './FormProducts';

const Table = () => {
  const [modal, setModal] = useState(false);
  const [listProducts, setListProducts] = useState([]);

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

  /**
   * effects
   */
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/task')
      const result = await response.json();
      setListProducts(result)
    }
    fetchData();
  }, [])
  return (
    <>
      <TableComponent listProducts={listProducts} />
      <FloatButton handleClick={handleClick} />
      {
        modal &&
        <FormProducts onClose={handleCloseModal} />
      }
    </>
  )
}

export default Table;