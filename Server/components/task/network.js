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
  try {
    const { id } = req.body;
    const result = await ctr.deleteProduct(id);
    sendResponse(res, 200, 'Deleted product', result);
  } catch (err) {
    sendResponse(res, 500, err, {});
  }
})
router.get('/:id', async (req, res) => {
  try {
    const result = await ctr.getProduct(req.params.id)
    sendResponse(res, 200, 'Get Product', result);
  } catch (err) {
    sendResponse(res, 404, err, {})
  }
})
router.post('/:id', async (req, res) => {
  try {
    const result = await ctr.updateProduct(req.params.id, req.body);
    sendResponse(res, 200, 'Update', result);
  } catch (err) {
    sendResponse(res, 500, err, {});
  }
})
module.exports = router;