const { Router } = require('express');
const { Episode } = require('../models/Episode');
const router = Router();

router
  .get('/', async (req, res) => {
    const episodes = await Episode.getAll();
    const resp = episodes.map(episode => ({ 'id': episode.id, 'number': episode.number, season: episode.season, title: episode.title, quotes: episode.quotes }));
    res.json(resp);
  });

module.exports = router;
