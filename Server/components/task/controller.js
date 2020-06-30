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

module.exports = {
  addProduct,
}
