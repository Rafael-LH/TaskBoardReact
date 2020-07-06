const store = require('./store');

const addProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await store.add(data);
      resolve('Registro insertado con exito!')
    } catch (err) {
      reject(err)
    }
  })
}
const listProduct = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await store.list();
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}
const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await store.delete(id);
      resolve(data);
    } catch (err) {
      reject(err)
    }
  })
}
const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await store.update(id, data);
      resolve(response);
    } catch (err) {
      reject(err);
    }
  })
}
const getProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await store.get(id);
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}
module.exports = {
  addProduct,
  listProduct,
  deleteProduct,
  updateProduct,
  getProduct,
}
