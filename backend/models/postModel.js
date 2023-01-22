const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    likes:{
      type: Number,
      default: 0
    },
    dislikes:{
      type: Number,
      default: 0
    },
    liked:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }],
    disliked:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Comment', postSchema)