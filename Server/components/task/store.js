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
module.exports = {
  add,
}