// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const User = require('./models/user.models');
const Dogs = require('./models/dogs.models');
const authRoutes = require('./routes/auth.routes');
const dogsRoutes = require('./routes/dogs.routes');
const matchRoutes = require('./routes/match.routes');

const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/dogs', dogsRoutes);
app.use('/match', matchRoutes);

// Use 'alter: true' instead of 'force: true' to preserve existing data
sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
