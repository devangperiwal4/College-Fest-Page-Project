const mongoose = require('mongoose')

const newsSchema = await mongoose.Schema({
        news:
        {
            type: String,
            required: [true, 'Please enter the text'],
        },
    },
    {
    timestamps: true,
    }
)

module.exports = mongoose.model('News', newsSchema)