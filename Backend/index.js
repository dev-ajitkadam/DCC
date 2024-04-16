const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const UserModel = require('./models/user');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(cookieParser());

const SECRET_KEY = process.env.JWT_SECRET;

// Middleware to verify user role and permissions
const verifyRole = (allowedRoles) => {
    return (req, res, next) => {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).send('A token is required for authentication');
        }
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            req.user = decoded;
            
            // Check if the user's role is one of the allowed roles
            if (!allowedRoles.includes(decoded.role)) {
                return res.status(403).send('You do not have permission to perform this action contact Admin');
            }

            // Check for specific permissions based on user role
            switch (decoded.role) {
                case 'admin':
                case 'manager':
                    // Admin and manager can add users
                    if (req.path === '/signup') {
                        return next();
                    }
                    break;
                default:
                    // Other roles are not allowed to add users
                    if (req.path === '/signup') {
                        return res.status(403).send('You do not have permission to add users');
                    }
            }
            
            next();
        } catch (err) {
            return res.status(401).send('Invalid Token');
        }
    };
};

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/dcc', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Signup route
app.post('/signup', verifyRole(['admin', 'manager']), async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({ name, email, password: hashedPassword });
        res.json({ status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user) {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: '30d' });
                res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 });
                res.json({ status: 'success', role: user.role });
            } else {
                res.status(401).json({ error: 'Incorrect password' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    res.clearCookie('token', { path: '/' }).json({ status: 'success' }); 
  });

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
