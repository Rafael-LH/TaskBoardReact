const Model = require('./model');

const add = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = new Model(data);
      result.save();
      resolve();
    } catch (err) {
      reject(err)
    }
  })
}
const list = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Model.find();
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}
const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      await Model.deleteOne({ _id: id });
      resolve('Producto eliminado');
    } catch (err) {
      reject(err);
    }
  })
}
const update = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Model.findOne({ _id: id });
      response.product = data.product;
      response.brand = data.brand;
      response.description = data.description;
      response.price = data.price;
      response.save();
      resolve('Updated Product')
    } catch (err) {
      reject(err)
    }
  })
}
const get = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await Model.findOne({ _id: id });
      resolve(data);
    } catch (err) {
      reject(err);
    }
  })
}
module.exports = {
  add,
  list,
  delete: deleteProduct,
  update,
  get,
}