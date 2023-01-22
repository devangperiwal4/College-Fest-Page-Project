const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    access: {
      type: String,
      default: 'Attendee',
    },
    referral: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)

