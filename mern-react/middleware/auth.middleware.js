// @ts-check
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {

    const token = (req.headers.autorization || '').split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded;
    next();

  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Пользователь не авторизован' });
  }
};
