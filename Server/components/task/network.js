const express = require('express');
const { sendResponse } = require('../../network/response');
const router = express.Router();
const ctr = require('./controller');

router.get('/', async (req, res) => {
  try {
    const data = await ctr.listProduct();
    res.status(200).send(data)
    // sendResponse(res, 200, 'Get all list', data)
  } catch (err) {
    sendResponse(res, 500, err, {})
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await ctr.addProduct(req.body);
    sendResponse(res, 201, 'Add product', result)
  } catch (err) {
    sendResponse(res, 500, err, {})
  }
})

router.delete('/', async (req, res) => {
  console.log(req.body.id);
})
module.exports = router;