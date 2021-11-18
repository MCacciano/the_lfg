const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/.env' });

connectDB();

// import routers
const groupsRouter = require('./routes/groups');

const app = express();

// body parser
app.use(express.json());

// mount routers
app.use('/api/v1/groups', groupsRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on port: ${PORT}`));

process.on('unhandledRejection', function (err, promise) {
  if (err) {
    console.error(`Error: ${err.message}`);
  }
});
