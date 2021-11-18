const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
//   owner: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'User',
//     required: true,
//   },
});

module.exports = model('Groups', GroupSchema);
