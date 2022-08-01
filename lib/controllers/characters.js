const { Router } = require('express');
const router = Router();
const Character = require('../models/Character');

router
  .get('/', async (req, res) => {
    const characters = await Character.getAll();
    const ids = characters.map((character) => ({ id: character.id, first_name: character.first_name, last_name: character.last_name, quotes:[] }));
    res.json(ids);
  });

module.exports = router;


