import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const getLogin = (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/products');
    }
    res.render('login', { error: null });
};

export const postLogin = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);
        if (!user) {
            return res.render('login', { error: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('login', { error: 'Invalid username or password' });
        }

        req.session.isLoggedIn = true;
        req.session.user = { id: user.id, username: user.username };

        req.session.save(err => {
            if (err) console.error(err);
            res.redirect('/products');
        });
    } catch (error) {
        next(error);
    }
};

export const postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) console.error(err);
        res.redirect('/login');
    });
};
