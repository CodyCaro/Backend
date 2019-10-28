const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./config/login-register-routes')
const authenticate = require('./auth/authenticate')
const artRoutes = require('./config/art-routes');
const server = express();

server.use(helmet());
server.use(express.json());
server.use('/auth',  authRoutes );
server.use('/art', authenticate, artRoutes);
server.use(cors());


server.get('/', (req, res) => {
    res.send('Hi! Yes, hello. I am working.')
})


module.exports = server;

