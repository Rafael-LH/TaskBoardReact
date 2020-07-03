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
  }
  const handleCloseModal = async () => {
    await fetchData();
    setModal(false);
  }
  const fetchData = async () => {
    const response = await fetch('/task')
    const result = await response.json();
    setListProducts(result)
  }
  const onAction = async () => await fetchData();
  /**
   * effects
   */
  useEffect(() => {
    const getData = async () => {
      await fetchData();
    }
    getData();
  }, [])
  return (
    <>
      <TableComponent listProducts={listProducts} onAction={onAction} />
      <FloatButton handleClick={handleClick} />
      {
        modal &&
        <FormProducts onClose={handleCloseModal} />
      }
    </>
  )
}
export default Table;