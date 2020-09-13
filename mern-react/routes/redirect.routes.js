// @ts-check
const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const config = require('config');
const Link = require('../models/Link');

const router = Router();

router.get('/:code', async (req, res) => {
  try {
    const link = await Link.findOne({ code: req.params.code });
    
    if (!link || !link.from) {
      return res.status(404).send('Not found');
    }

    link.clicks = (link.clicks || 0) + 1;
    await link.save();

    res.redirect(302, link.from);
  
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
});

module.exports = router;
