const express = require('express');
const controller = require('../controller/credit-cards');
const schema = require('../schemas/credit-card');
const validator = require('../middleware/validator');

const router = express.Router();

/**
 * GET credit cards
 */
router.get('/', controller.getAll);

/**
 * Add credit card
 */
router.post('/', validator(schema), controller.create);

module.exports = router;
