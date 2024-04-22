const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const userRoutes = require('./Routers/userRoutes');
const projectRoutes = require('./Routers/projectsRoutes');

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(cookieParser());

// Middleware to verify user role and permissions
// const verifyRole = (allowedRoles) => {
//     return (req, res, next) => {
//         const token = req.headers.authorization.split(' ')[1];
//         if (!token) {
//             return res.status(403).send('A token is required for authentication');
//         }
//         try {
//             const decoded = jwt.verify(token, SECRET_KEY);
//             req.user = decoded;
            
//             // Check if the user's role is one of the allowed roles
//             if (!allowedRoles.includes(decoded.role)) {
//                 return res.status(403).send('You do not have permission to perform this action contact Admin');
//             }

//             // Check for specific permissions based on user role
//             switch (decoded.role) {
//                 case 'admin':
//                 case 'manager':
//                     // Admin and manager can add users
//                     if (req.path === '/signup') {
//                         return next();
//                     }
//                     break;
//                 default:
//                     // Other roles are not allowed to add users
//                     if (req.path === '/signup') {
//                         return res.status(403).send('You do not have permission to add users');
//                     }
//             }
            
//             next();
//         } catch (err) {
//             return res.status(401).send('Invalid Token');
//         }
//     };
// };

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/dcc', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//Routes
app.use('/user', userRoutes);
app.use('/project', projectRoutes);
// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
