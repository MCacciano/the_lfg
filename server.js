const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running on port: ${PORT}`));

process.on('unhandledRejection', function (err, promise) {
  if (err) {
    console.error(`Error: ${err.message}`);
  }
});
