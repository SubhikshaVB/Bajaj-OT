const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/', bfhlController.postBfhl);
router.get('/', bfhlController.getBfhl);

module.exports = router;