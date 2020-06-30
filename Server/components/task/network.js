const express = require('express');
const { sendResponse } = require('../../network/response');
const router = express.Router();
const ctr = require('./controller');

router.get('/', async (req, res) => {
  res.status(200).send('Get Tasks')
})

router.post('/', async (req, res) => {
  try {
    const result = await ctr.addProduct(req.body);
    sendResponse(res, 201, 'Add product', result)
  } catch (err) {
    sendResponse(res, 500, err, {})
  }
})
module.exports = router;