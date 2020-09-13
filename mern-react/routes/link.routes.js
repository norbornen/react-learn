// @ts-check
const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const config = require('config');
const sortid = require('shortid');
const authMiddleware = require('../middleware/auth.middleware');
const Link = require('../models/Link');
const shortid = require('shortid');

const router = Router();

router.post('/generate', authMiddleware, async (req, res) => {
  try {

    const baseUrl = config.get('baseUrl');

    const { from } = req.body;

    let link = await Link.findOne({ from });
    if (link) {
      return res.json({ link });
    }

    const code = shortid.generate();

    const to = `${baseUrl}/t/${code}`;

    link = new Link({
      from, to, code,
      owner: req.user.userId
    });

    await link.save()

    res.json({ link });

  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId });
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const link = await Link.findOne({ _id: req.params.id, owner: req.user.userId });
    res.json(link);
  } catch (err) {
    res.status(500).json({ message: err.toString() });
  }
});

module.exports = router;
