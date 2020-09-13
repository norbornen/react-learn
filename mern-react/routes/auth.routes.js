// @ts-check
const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

const router = Router();

router.post(
    '/register',
    [
        check('email', 'Некорректный e-mail').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Некорректные данные при регистрации',
                errors: errors.array()
            });
        }

        try {
            let { email, password } = req.body;
            email =  (email || '').trim().toLocaleLowerCase();

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: `Пользователь ${email} уже зарегистрирован` });
            }

            const passwordRandom = Math.trunc(Math.random() * 10000);
            const hashedPassword = await bcrypt.hash(password, 10);

            user = new User({
                email, password: hashedPassword, random: passwordRandom
            });
            await user.save();

            res.status(201).json({ message: 'Пользователь создан' });

        } catch (err) {
            res.status(500).json({ message: err.toString() });
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'Некорректный e-mail').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Некорректные данные при авторизации',
                errors: errors.array()
            });
        }

        try {
            let { email, password } = req.body;
            email =  (email || '').trim().toLocaleLowerCase();

            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: `Пользователь не зарегистрирован` });
            }

            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                return res.status(400).json({ message: `Неверный пароль, попробуйте снова` });
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id });

        } catch (err) {
            res.status(500).json({ message: err.toString() });
        }
    }
);

module.exports = router;
