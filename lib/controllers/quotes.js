const { Router } = require('express');
const { Quote } = require('../models/Quote');
const router = Router();

router
  .post('/', async (req, res) => {
    const quote = await Quote.insert(req.body);
    res.json(quote);
  });

module.exports = router;
