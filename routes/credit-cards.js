const express = require('express');
const controller = require('../controller/credit-cards');

const router = express.Router();

/**
 * GET credit cards
 */
router.get('/', controller.getAll);

/**
 * Add credit card
 */
router.post('/', controller.create);

module.exports = router;
