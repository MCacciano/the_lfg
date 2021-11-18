const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    // Exit process with a failure
    process.exit(1);
  }
};

module.exports = connectDB;
