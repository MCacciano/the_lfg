const { Schema, model } = require('mongoose');

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  members: {
      type: Array,
      of: {
          type: Schema.ObjectId,
          ref: 'User'
      }
  }
  //   schedule: {},
});

module.exports = model('Groups', GroupSchema);
