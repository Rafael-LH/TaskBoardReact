import React, { useState, useEffect } from 'react';
import TableComponent from '../components/TableComponent';
import FloatButton from './FloatButton';
import FormProducts from './FormProducts';

const Table = () => {
  const [modal, setModal] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idProduct, setIdProduct] = useState(null);

  /**
   * Handlers
   */
  const handleGetProduct = async (id) => {
    try {
      setIsUpdate(true)
      const response = await fetch(`/task/${id}`)
      const { result } = await response.json();
      setIdProduct(id);
      setDataProducts(result);
      setModal(true);
    } catch (error) {
      setModal(false)
      console.log(error);
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
  }
  const handleCloseModal = async () => {
    await fetchData();
    setModal(false);
    setIsUpdate(false);
  }
  const fetchData = async () => {
    const response = await fetch('/task');
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
  }, []);

  return (
    <>
      <TableComponent listProducts={listProducts} onAction={onAction} handleGetProduct={handleGetProduct} />
      <FloatButton handleClick={handleClick} />
      {
        modal &&
        <FormProducts onClose={handleCloseModal} dataProducts={dataProducts} isUpdate={isUpdate} idProduct={idProduct} />
      }
    </>
  )
}
export default Table;