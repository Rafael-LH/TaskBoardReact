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
module.exports = {
  add,
  list
}